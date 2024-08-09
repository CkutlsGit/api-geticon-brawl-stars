import express, { Express, Request, Response } from "express"
import path from 'path'

const router = express.Router()
const imageFolderPath = path.join(__dirname, '../../public/images')

router.get('/:name', (req: Request, res: Response) => {
    const { name } = req.params

    const imagePath = path.join(imageFolderPath, `${ name.toLowerCase() }.png`)

    res.sendFile(imagePath, err => {
        if (err) {
            res.status(404).json({ error: 'Изображение не найдено' })
        }
    })
})

export default router