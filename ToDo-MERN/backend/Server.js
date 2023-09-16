
const express =  require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/ToDoRoute')
const app = express()

const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())
mongoose
.connect(process.env.MONGO_DB_URL)
.then(()=> console.log('Connected to MongoDB'))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

 