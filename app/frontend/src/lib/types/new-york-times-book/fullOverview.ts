export interface FullOverview {
    status:      string;
    copyright:   string;
    num_results: number;
    results:     Results;
}

export interface Results {
    bestsellers_date:           Date;
    published_date:             Date;
    published_date_description: string;
    previous_published_date:    Date;
    next_published_date:        string;
    lists:                      List[];
}

export interface List {
    list_id:           number;
    list_name:         string;
    list_name_encoded: string;
    display_name:      string;
    updated:           Updated;
    list_image:        string;
    list_image_width:  string;
    list_image_height: string;
    books:             Book[];
}

export interface Book {
    age_group:            string;
    amazon_product_url:   string;
    article_chapter_link: string;
    author:               string;
    book_image:           string;
    book_image_width:     number;
    book_image_height:    number;
    book_review_link:     string;
    contributor:          string;
    contributor_note:     string;
    created_date:         Date;
    description:          string;
    first_chapter_link:   string;
    price:                string;
    primary_isbn10:       string;
    primary_isbn13:       string;
    book_uri:             string;
    publisher:            string;
    rank:                 number;
    rank_last_week:       number;
    sunday_review_link:   string;
    title:                string;
    updated_date:         Date;
    weeks_on_list:        number;
    buy_links:            BuyLink[];
}

export interface BuyLink {
    name: string;
    url:  string;
}

export enum Updated {
    Monthly = "MONTHLY",
    Weekly = "WEEKLY",
}
