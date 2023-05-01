import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Book } from "./Book";

@Entity()
export class BuyLink {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Book, book => book.buy_links)
    book: Book;

    @Column()
    name: string;

    @Column()
    url:  string;
}