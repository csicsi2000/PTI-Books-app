import "reflect-metadata"
import { DataSource } from "typeorm"
import { Book } from "shared-component/dist/entity/Book"
import { BookList } from "shared-component/dist/entity/BookList"
import { BuyLink } from "shared-component/dist/entity/BuyLink"
import { Review } from "shared-component/dist/entity/Review"
import { User } from "shared-component"
import * as dotenv from "dotenv";
import { Session } from "./entity/Session"

dotenv.config({path:__dirname+'/.env'});

// create a .env file in the backend folder
// set the following variables: MYSQL_USER, MYSQL_PASSWORD
if(process.env.MYSQL_DATABASE == undefined){
    console.error("Konfigurálj .env fájl a backend/src mappába. A \"template.env\" fájl nyújt segítséget.")
}
console.log("Configured database: " + process.env.MYSQL_DATABASE);

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.MYSQL_USER, // e.g. "testORM"
    password: process.env.MYSQL_PASSWORD, // e.g. "test"
    database: process.env.MYSQL_DATABASE, // e.g. "book_typescript_ORM"
    // Első alkalommal true-ra kell állítani
    synchronize: false,
    logging: true,
    entities: [User, Book, BookList, BuyLink, Review,Session],
    migrations: [],
    subscribers: [],
})
