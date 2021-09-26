const express=require('express')
const bodyparser=require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')
var fs = require('fs')
var morgan = require('morgan')
//const myReqLogger = require('./Utilities/requestLogger')
const route=require('./Routes/Routing')
const errorLogger = require('./Utilities/errorlogger')
const cors=require('cors')
const app=express()
app.use(cookieParser())
app.use(cors())
app.use(bodyparser.json())
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'RequestLogger.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use('/',route)
app.use(errorLogger)


const server=app.listen(4000)
console.log("Listening at 4000")
module.exports=server;