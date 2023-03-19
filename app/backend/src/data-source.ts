import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "shared-component"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "testORM",
    password: "test",
    database: "book_typescript_ORM",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
