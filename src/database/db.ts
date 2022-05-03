import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
    console.log(`Db listening app`)
}).catch(error => console.log(error))