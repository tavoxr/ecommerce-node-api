const moongose =  require('mongoose')
const {Schema} = moongose;


const productSchema =  new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
        required: true    
    },
    countInStock:{
        type: Number,
        required: true
    },
    imageUrl:{
        type: String,
    }

},{
    versionKey: false,
    timestamps: true
});


const Product = moongose.model('product',productSchema);

module.exports =  Product;