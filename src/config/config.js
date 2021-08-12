const dotenv = require('dotenv')
dotenv.config()


const config = {
    PORT: process.env.PORT,
    MONGODB_URI : process.env.MONGODB_URI || 'mongodb://localhost:27017/test'
}


module.exports = config
