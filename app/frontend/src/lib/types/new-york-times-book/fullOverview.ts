import type { Book } from "shared-component/dist/entity/Book";

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

export enum Updated {
    Monthly = "MONTHLY",
    Weekly = "WEEKLY",
}
