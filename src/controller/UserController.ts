import { AppDataSource } from '../database/data-source';
import { User } from '../entity/User'


export class UserController {

    //save new users
    async save(user:User) {
        const userSaved = await AppDataSource.manager.save(user);
        return userSaved;
    }
    
    //get all users
    async getAll() {
        const users = await AppDataSource.manager.find(User);
        return users;
    }
}