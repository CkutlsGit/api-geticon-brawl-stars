import express, { Express, Request, Response } from "express"
import bodyParser from "body-parser"

import getImgRouter from "./routes/getImg"

const app: Express = express()

app.use(bodyParser.json())
app.use('/get-icon', getImgRouter)

app.get('/', (req: Request, res: Response) => {
    return res.send('server work!')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
