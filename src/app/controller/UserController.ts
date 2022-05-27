import { AppDataSource } from '../../database/data-source';
import { User } from '../entity/User'


class UserController {

    //save new users
    async save(user:User) {
        try {
            const userSaved = await AppDataSource.manager.save(user)
            return userSaved
        } catch (err) {
            console.error('err.message :>> ', err.message)
        }
    }
    
    //get all users
    async getAll() {
        try {
            const users = await AppDataSource.manager.find(User)
            return users
        } catch (err) {
            console.error('err.message :>> ', err.message)
        }
    }

    //get user by email
    async getByEmail(email: string): Promise <User>{
        try {
            const userRepository =  await AppDataSource.getRepository(User)
            const user = await userRepository.findOneBy({
                email: email
            })
            return user
        } catch (err) {
            console.error('err.message :>> ', err.message)
        }
    }

    async remove(email: string, password: string) {
        try {
            const userRepository = await AppDataSource.getRepository(User)
            const user = await userRepository.findOneBy({
                email: email
            })
            if(!user || user.password !== password){
                return({message: "Acess denied!"})
            }
            const userRemoved = await userRepository.remove(user)

            return ({
                message: ":fire: User removed with sucess",
                userRemoved
            })
        } catch (err) {
            console.error('err.message :>> ', err.message)
        }
    }
}

export default new UserController()