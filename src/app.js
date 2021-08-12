require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()

//settings
app.set('port', process.env.PORT)


//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false})) // para soportar datos desde formularios
app.use(express.json()) //para soportar datos json



module.exports = app