import express, { Express, Request, Response } from "express";

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    return res.send('server work!')
})

app.get('/ping', (req: Request, res: Response) => {
    return res.send('Pong')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
