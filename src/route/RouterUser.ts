import { Router } from 'express'

import { UserController } from '../controller/UserController'

import { User } from '../entity/User'

const RouterUser = Router()

const usercontroller = new UserController()


//Save New users service
RouterUser.post('/register', async (req, res) => {
    const {name, email, age} = req.body;
    const user = new User(name, email, age);
    const userSaved = await usercontroller.save(user);
    res.json(userSaved);
})

//List users
RouterUser.get('/', async (req, res) => {
    const users = await usercontroller.getAll();
    res.json(users);
})

export {RouterUser}