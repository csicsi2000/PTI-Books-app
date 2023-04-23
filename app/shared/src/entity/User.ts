import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Review } from "./Review"
import { BookList } from "./BookList"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    age: number

    @Column()
    password: string

    @OneToMany(() => Review, review => review.user)
    reviews: Review[];

    @ManyToMany(() => BookList, bookList => bookList.user)
    @JoinTable()
    bookLists: BookList[];
}
