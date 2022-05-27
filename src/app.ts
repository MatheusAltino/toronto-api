import * as express from 'express'
import * as cors from 'cors'
import RouterUser from './routes/RouterUser'

export const app = express()

//config json
app.use(express.json())

//Acess control
app.use(cors())

app.use('/user', RouterUser)
