import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, ManyToOne } from "typeorm"
import { Book } from "./Book";
import { User } from "./User";

@Entity()
export class BookList {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, user => user.bookLists)
    user: User;

    @ManyToMany(() => Book, book => book.book_lists)
    @JoinTable()
    books: Book[];
    
    @Column()
    name: string
}