import express from 'express'
import cors from 'cors'
import route from './routes'

const app   = express()
const PORT  = 3333

app.use(express.json())
app.use(cors())
app.use(route)

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})