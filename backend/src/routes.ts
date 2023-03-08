import { Router } from 'express'
import {
    AddBook,
    FecthBooks,
    FecthOneBook,
    DeleteOneBook,
    UpdateOneBook
} from './controllers/BookControllers'

const route = Router()

route.get('/', FecthBooks)
route.get('/:id', FecthOneBook)
route.post('/', AddBook)
route.put('/:id', UpdateOneBook)
route.delete('/:id', DeleteOneBook)

export default route