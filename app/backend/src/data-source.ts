import "reflect-metadata"
import { DataSource } from "typeorm"
import { Book } from "shared-component/dist/entity/Book"
import { BookList } from "shared-component/dist/entity/BookList"
import { BuyLink } from "shared-component/dist/entity/BuyLink"
import { Review } from "shared-component/dist/entity/Review"
import { User } from "shared-component"
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname+'../.env' });

// create a .env file in the backend folder
// set the following variables: MYSQL_USER, MYSQL_PASSWORD
console.log(process.env.MYSQL_DATABASE);

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.MYSQL_USER, // e.g. "testORM"
    password: process.env.MYSQL_PASSWORD, // e.g. "test"
    database: process.env.MYSQL_DATABASE, // e.g. "book_typescript_ORM"
    synchronize: true,
    logging: true,
    entities: [User, Book, BookList, BuyLink, Review],
    migrations: [],
    subscribers: [],
})
