
const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProducts,getProductById,deleteProductById,updateProduct
} = require('../controllers/product.controller');

router.route('/')
    .post(createProduct)
    .get(getProducts);

router.route('/:id').get(getProductById).delete(deleteProductById).patch(updateProduct);

module.exports = router;
