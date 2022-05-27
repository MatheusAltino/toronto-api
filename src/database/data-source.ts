import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../app/entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "toronto",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize().then(async () => {
    console.log(`Db listening app`)
}).catch(error => console.log(error))