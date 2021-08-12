const config = require('./config');
const mongoose = require('mongoose');



const dbConexion = async ()=>{

    try{

        await mongoose.connect(config.MONGODB_URI, {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useFindAndModify: false,
              });

    }catch(error){
        console.log(error);
    }
    
}

dbConexion();


const db =  mongoose.connection;
db.once('open', ()=>{
    console.log('Database connected')
})


module.exports =  dbConexion;


































/*
require('./server');
const mongodbd  =  require('./config');
const mongoose =  require('mongoose');



mongoose.connect( mongodbd.mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true} )

const db =  mongoose.connection;
db.once('open', ()=>{
    console.log('Database connected at ', mongodbd.mongodbUrl)
})

*/