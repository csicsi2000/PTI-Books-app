import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User";
import { Book } from "./Book";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User)
    @JoinColumn({ name: "userId" })
    user: User;

    @ManyToOne(() => Book)
    @JoinColumn({ name: "bookId" })
    book: Book;

    @Column()
    comment: string 

    @Column()
    rating: number

    @Column()
    date: Date
}