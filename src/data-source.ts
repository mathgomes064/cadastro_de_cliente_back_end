import { DataSource } from "typeorm"
import { Client } from "./entities/client.entity";

require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,

    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database:  process.env.POSTGRES_DB,

    synchronize: false,
    logging: true,
    entities: [Client],
    migrations: ["src/migrations/*.ts"],
})

AppDataSource.initialize().then(() => {
    console.log("Data Source Initialized")
}).catch((err) => {
    console.error("Error during Data Source Initialization", err)
})