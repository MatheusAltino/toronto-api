import { Router } from 'express'
import UserController from '../app/controller/UserController'
import { User } from '../app/entity/User'

const RouterUser = Router()

const usercontroller = UserController


//Save New users service
RouterUser.post('/register', async (req, res) => {
    const {name, email, password} = req.body
    const user = new User(name, email, password)
    const userSaved = await usercontroller.save(user)
    res.json(userSaved)
})

//List users
RouterUser.get('/', async (req, res) => {
    const users = await usercontroller.getAll();
    res.json(users);
})

export default RouterUser