import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Admin } from "./entity/Admin";
const env = require('dotenv').config().parsed;

export const AppDataSource = new DataSource({
    type: env.DATABASE_TYPE,
    host: env.DATABASE_HOST,
    port: Number(env.PORT),
    username: env.DATABASE_USERNAME,
    password: env.PASSWORD,
    database: env.DATABASE_NAME,
    entities: [User, Admin],
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: [],
});
