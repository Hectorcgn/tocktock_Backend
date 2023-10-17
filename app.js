import 'dotenv/config'
import express from 'express'
import multer from 'multer'
import cors from 'cors'
import cloudinary from 'cloudinary'
import jwt from 'jsonwebtoken'
import morgan from 'morgan'

import { router as usersRouter } from './routes/users.js'
import { register } from './controller/register.js'

const { PORT } = process.env
const app = express()
const upload = multer()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', upload.none(), usersRouter)

// app.post('/api/login')

// app.post('api/upload')
// app.post('/api/feed')

// app.post('api/search')

// app.post('api/profile')
// app.post('api/me')

// app.put('api/privacy')

app.listen(PORT, () => console.log(PORT))