import { User } from "./User";
import { Book } from "./Book";
export declare class Review {
    id: number;
    user: User;
    book: Book;
    comment: string;
    rating: number;
    date: Date;
}
