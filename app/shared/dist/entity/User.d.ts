import { Review } from "./Review";
import { BookList } from "./BookList";
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    password: string;
    reviews: Review[];
    bookLists: BookList[];
}
