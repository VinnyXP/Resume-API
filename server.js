require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


//routes 
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/header', (req, res) => {
    res.send('Resume Header')
})


mongoose
.connect(process.env.DATABASE_URL)
.then(() => {
    app.listen(3000, () => console.log('NODE API APP IS RUNNING ON PORT 3000'))
    console.log("Connected to mongodb db")
}).catch((error) => {
    console.log(error)
})



/*require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())

app.listen(3000, () => console.log('server has started')) */
