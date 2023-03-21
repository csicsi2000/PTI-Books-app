import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class BookList {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}