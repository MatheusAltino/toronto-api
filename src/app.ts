import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

import { AppDataSource } from './database/data-source'
import { RouterUser } from './route/RouterUser'

export const app = express()

//db connection
AppDataSource.initialize()

//config json
app.use(bodyParser.json())

//Acess control
app.use(cors())

app.use('/user', RouterUser)
