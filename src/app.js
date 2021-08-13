const config =  require('./config/config')
const express = require('express')
const morgan = require('morgan')
const app = express()
const productsRoutes =  require('./routes/products.routes')

//settings
app.set('port', config.PORT )


//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false})) // para soportar datos desde formularios
app.use(express.json()) //para soportar datos json

// routes
app.use('/api/products', productsRoutes);


module.exports = app