import { Request, Response } from 'express'
import myDb from '../db/db_books'

export async function AddBook(req: Request, res: Response) {
    try {

        myDb.tbBook.create({
            label: req.body.label,
            published: req.body.published,
            author: req.body.author,
            gender: req.body.gender,
            imgURL: req.body.imgURL
        })

        return res.status(201).json('Successful registration!')
    } catch (error) {
        return res.status(400).json({ msg: 'Registration failed', error: error })
    }
}

export async function FecthBooks(req: Request, res: Response) {
    try {

        const registers = myDb.tbBook.findAll()

        return res.status(201).json(registers)
    } catch (error) {
        return res.status(400).json({ msg: 'Database is empty' })
    }
}

export async function FecthOneBook(req: Request, res: Response) {
    try {
        const { id } = req.params

        const book = myDb.tbBook.findOne(Number(id))

        return res.status(201).json(book)
    } catch (error) {
        return res.status(400).json({ msg: 'Register not found' })
    }
}

export async function DeleteOneBook(req: Request, res: Response) {
    try {
        const { id } = req.params
        
        myDb.tbBook.deleteOne(Number(id))

        return res.status(201).json({ msg: 'Successful delete!' })
    } catch (error) {
        return res.status(400).json({ msg: 'Delete failed' })
    }
}

export async function UpdateOneBook(req: Request, res: Response) {
    try {
        const { id } = req.params
        
        myDb.tbBook.updateOne({ 
            id: Number(id),
            label: req.body.label,
            published: req.body.published,
            author: req.body.author,
            gender: req.body.gender,
            imgURL: req.body.imgURL
         })

        return res.status(201).json({ msg: 'Successful update!' })
    } catch (error) {
        return res.status(400).json({ msg: 'Update failed' })
    }
}