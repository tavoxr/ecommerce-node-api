const router = require('express').Router();
const products = require('../data/products');
const productControllers = require('../controllers/products')



router.get('/', productControllers.getProducts)

router.get('/:id', productControllers.getProduct)

router.post('/create', productControllers.createProduct)

router.put('/:id', productControllers.updateProduct)

router.delete('/:id', productControllers.deleteProduct)




module.exports =  router