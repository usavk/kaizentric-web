const express = require('express');
const dotenv =require('dotenv').config()
const cors = require('cors')
const {mongoose} = require('mongoose')

const app=express();
//database conncetion
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not connected', err))

//middleware

app.use(express.json())

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))