export interface FullOverview {
    status:     string;
    copyright:  string;
    numResults: number;
    results:    Results;
}

export interface Results {
    bestsellersDate:          Date;
    publishedDate:            Date;
    publishedDateDescription: string;
    previousPublishedDate:    Date;
    nextPublishedDate:        string;
    lists:                    List[];
}

export interface List {
    listID:          number;
    listName:        string;
    listNameEncoded: string;
    displayName:     string;
    updated:         Updated;
    listImage:       null;
    listImageWidth:  null;
    listImageHeight: null;
    books:           Book[];
}

export interface Book {
    ageGroup:           string;
    amazonProductURL:   string;
    articleChapterLink: string;
    author:             string;
    bookImage:          string;
    bookImageWidth:     number;
    bookImageHeight:    number;
    bookReviewLink:     string;
    bookURI:            string;
    contributor:        string;
    contributorNote:    string;
    createdDate:        Date;
    description:        string;
    firstChapterLink:   string;
    price:              string;
    primaryIsbn10:      string;
    primaryIsbn13:      string;
    publisher:          string;
    rank:               number;
    rankLastWeek:       number;
    sundayReviewLink:   string;
    title:              string;
    updatedDate:        Date;
    weeksOnList:        number;
    buyLinks:           BuyLink[];
}

export interface BuyLink {
    name: Name;
    url:  string;
}

export enum Name {
    Amazon = "Amazon",
    AppleBooks = "Apple Books",
    BarnesAndNoble = "Barnes and Noble",
    BooksAMillion = "Books-A-Million",
    Bookshop = "Bookshop",
    IndieBound = "IndieBound",
}

export enum Updated {
    Monthly = "MONTHLY",
    Weekly = "WEEKLY",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toFullOverview(json: string): FullOverview {
        return cast(JSON.parse(json), r("FullOverview"));
    }

    public static fullOverviewToJson(value: FullOverview): string {
        return JSON.stringify(uncast(value, r("FullOverview")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "FullOverview": o([
        { json: "status", js: "status", typ: "" },
        { json: "copyright", js: "copyright", typ: "" },
        { json: "num_results", js: "numResults", typ: 0 },
        { json: "results", js: "results", typ: r("Results") },
    ], false),
    "Results": o([
        { json: "bestsellers_date", js: "bestsellersDate", typ: Date },
        { json: "published_date", js: "publishedDate", typ: Date },
        { json: "published_date_description", js: "publishedDateDescription", typ: "" },
        { json: "previous_published_date", js: "previousPublishedDate", typ: Date },
        { json: "next_published_date", js: "nextPublishedDate", typ: "" },
        { json: "lists", js: "lists", typ: a(r("List")) },
    ], false),
    "List": o([
        { json: "list_id", js: "listID", typ: 0 },
        { json: "list_name", js: "listName", typ: "" },
        { json: "list_name_encoded", js: "listNameEncoded", typ: "" },
        { json: "display_name", js: "displayName", typ: "" },
        { json: "updated", js: "updated", typ: r("Updated") },
        { json: "list_image", js: "listImage", typ: null },
        { json: "list_image_width", js: "listImageWidth", typ: null },
        { json: "list_image_height", js: "listImageHeight", typ: null },
        { json: "books", js: "books", typ: a(r("Book")) },
    ], false),
    "Book": o([
        { json: "age_group", js: "ageGroup", typ: "" },
        { json: "amazon_product_url", js: "amazonProductURL", typ: "" },
        { json: "article_chapter_link", js: "articleChapterLink", typ: "" },
        { json: "author", js: "author", typ: "" },
        { json: "book_image", js: "bookImage", typ: "" },
        { json: "book_image_width", js: "bookImageWidth", typ: 0 },
        { json: "book_image_height", js: "bookImageHeight", typ: 0 },
        { json: "book_review_link", js: "bookReviewLink", typ: "" },
        { json: "book_uri", js: "bookURI", typ: "" },
        { json: "contributor", js: "contributor", typ: "" },
        { json: "contributor_note", js: "contributorNote", typ: "" },
        { json: "created_date", js: "createdDate", typ: Date },
        { json: "description", js: "description", typ: "" },
        { json: "first_chapter_link", js: "firstChapterLink", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "primary_isbn10", js: "primaryIsbn10", typ: "" },
        { json: "primary_isbn13", js: "primaryIsbn13", typ: "" },
        { json: "publisher", js: "publisher", typ: "" },
        { json: "rank", js: "rank", typ: 0 },
        { json: "rank_last_week", js: "rankLastWeek", typ: 0 },
        { json: "sunday_review_link", js: "sundayReviewLink", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "updated_date", js: "updatedDate", typ: Date },
        { json: "weeks_on_list", js: "weeksOnList", typ: 0 },
        { json: "buy_links", js: "buyLinks", typ: a(r("BuyLink")) },
    ], false),
    "BuyLink": o([
        { json: "name", js: "name", typ: r("Name") },
        { json: "url", js: "url", typ: "" },
    ], false),
    "Name": [
        "Amazon",
        "Apple Books",
        "Barnes and Noble",
        "Books-A-Million",
        "Bookshop",
        "IndieBound",
    ],
    "Updated": [
        "MONTHLY",
        "WEEKLY",
    ],
};
