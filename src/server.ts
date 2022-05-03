import { app } from './app'

const PORT = process.env.PORT || 3000

export const server = app.listen(PORT, () => {console.log(`App listening at http://localhost:${PORT}`)})


process.on('SIGINT', () => {
    server.close()
    console.log('App finish!')
})