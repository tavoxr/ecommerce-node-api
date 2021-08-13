const dotenv = require('dotenv')
dotenv.config()


const config = {
    PORT: process.env.PORT,
    MONGODB_URI : process.env.MONGODB_URI
}


module.exports = config
