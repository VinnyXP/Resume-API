require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Resume = require('./models/resumeModel')

app.use(express.json())


//routes 
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/resume', async(req, res) => {
    try{
        const resume = await Resume.find({})
        res.status(200).json(resume)
    } catch(error){
        console.log(error.message);
        res.status(500).json({messsage: error.message})
    }
})

app.post('/resume', async(req, res) => {
    try {
        const resume = await Resume.create(req.body)
        res.status(200).json(resume)
    } catch(error) {
        console.log(error.message);
        res.status(500).json({messsage: error.message})
    }
})


mongoose
.connect(process.env.DATABASE_URL)
.then(() => {
    app.listen(3000, () => console.log('NODE API APP IS RUNNING ON PORT 3000'))
    console.log("Connected to mongodb db")
}).catch((error) => {
    console.log(error)
})

