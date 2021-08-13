const router = require('express').Router();
const products = require('../data/products');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/products')

// GET ALL PRODUCTS
// @route GET /api/products
router.get('/', getProducts)

// GET ONE PRODUCT
// @route GET /api/products/:id
router.get('/:id', getProduct)

// CREATE PRODUCT
// @route POST /api/products
router.post('/create', createProduct)

// UPDATE PRODUCT
// @route PUT /api/products/:id
router.put('/:id', updateProduct)

// DELETE PRODUCT
// @route DELETE /api/products/:id
router.delete('/:id', deleteProduct)


module.exports =  router