const Product = require('../models/Product');


const getProducts = async (req,res)=>{

    const products =  await Product.find()
    res.json(products)
}


const getProduct = async (req, res)=>{

    try{
        const idProduct =  req.params.id
        const  product = await Product.findById(idProduct)

        res.json(product)

    }catch(error){
        res.status(500).json({message: error.message || "Something goes wrong retrieving the product." })
    }

}


const createProduct = async (req,res)=>{

    console.log('req.params', req.params)
    console.log('req.body', req.body)
    console.log('req.query', req.query)
    
    try{

        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
            countInStock: req.body.countInStock
        })

        const productSaved = await newProduct.save();

        res.json(productSaved)

    }catch(error){
        res.status(500).json({message: error.message || "Something goes wrong creating product."})
    }
  
}



const updateProduct = async (req,res)=>{

    try{
        const productId  = req.params.id

        const product =  {
            name : req.body.name,
            price: req.body.price,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            countInStock: req.body.countInStock
        }
        const productUpdated =   await Product.findByIdAndUpdate(productId, product)

        if(!productUpdated){
            return res.status(400).json({message: `Product with id ${productId} does not exists` })
        }else{
            return res.status(200).json({message: "Product was updated successfully!"})
        }

    }catch(error){
        res.status(500).json({message: error.message || "Something goes wrong updating product." })
    }

}



const deleteProduct = async (req,res)=>{
    const idProduct = req.params.id

    try{
        const product  = await Product.findByIdAndDelete(idProduct)

        if(!product){
            res.status(400).json({message: `Product with id ${idProduct} doesn't exist`})    
        }else{
            res.status(200).json({message: `Product with id ${product.id} was successfully deleted`})    
        }

    }catch(error){
        res.status(500).json({message: error.message || "Something goes wrong deleting product"})
    }

}



const productControllers = {

    getProducts: getProducts,
    getProduct: getProduct,
    createProduct: createProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
}

module.exports  = productControllers;
