import express, { Express, Request, Response } from "express";

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send('server work!')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
