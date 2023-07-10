import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Admin } from "./entity/Admin";

// export const AppDataSource = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "test",
//     password: "test",
//     database: "test",
//     synchronize: true,
//     logging: false,
//     entities: [User],
//     migrations: [],
//     subscribers: [],
// })

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User, Admin],
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: [],
});
