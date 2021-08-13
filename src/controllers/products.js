const Product = require('../models/Product');


const getProducts = async (req,res)=>{

    try{
        const products =  await Product.find()
        res.json(products)
    }catch(error){
        res.status(500).json({message: error.message || "Something goes wrong retrieving products"})
    }
    
}


const getProduct = async (req, res)=>{

    try{
        const {id} =  req.params
        const  product = await Product.findById(id)

        if(!product){
            res.status(400).json({message: `Product with id ${id} does not exists` })
        }else{
            res.json(product)
        }

    }catch(error){
        res.status(500).json({message: error.message || "Something goes wrong retrieving the product." })
    }

}


const createProduct = async (req,res)=>{

    // console.log('req.body', req.body)

    const {name, price, imageUrl, description, countInStock} = req.body
    
    try{

        const newProduct = new Product({
            name,
            price,
            imageUrl,
            description,
            countInStock
        })

        const productSaved = await newProduct.save();

        res.json(productSaved)

    }catch(error){
        res.status(500).json({message: error.message || "Something goes wrong creating product."})
    }
  
}



const updateProduct = async (req,res)=>{

    try{
        const {id}  = req.params
        const {name, price, description, imageUrl, countInStock} = req.body

        const product =  {
            name,
            price,
            description,
            imageUrl,
            countInStock
        }

        const productUpdated =   await Product.findByIdAndUpdate(id, product)

        if(!productUpdated){
            res.status(400).json({message: `Product with id ${id} does not exists` })
        }else{
            res.status(200).json({message: "Product was updated successfully!"})
        }

    }catch(error){
        res.status(500).json({message: error.message || "Something goes wrong updating product." })
    }

}



const deleteProduct = async (req,res)=>{
    const {id} = req.params

    try{
        const product  = await Product.findByIdAndDelete(id)

        if(!product){
            res.status(400).json({message: `Product with id ${id} doesn't exist`})    
        }else{
            res.status(200).json({message: `Product with id ${product.id} was successfully deleted`})    
        }

    }catch(error){
        res.status(500).json({message: error.message || "Something goes wrong deleting product"})
    }

}


module.exports  = { 
    getProducts, 
    getProduct, 
    createProduct, 
    updateProduct,
    deleteProduct
};
