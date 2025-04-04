import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { eventHandler } from './events/eventHandler.js'

const app = express()

app.use(cors())
app.use(express.json())

eventHandler(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Roblox API running on :${PORT}`)
})
