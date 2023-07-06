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
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [User, Admin],
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: [],
});
