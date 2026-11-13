const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProducts,getProductById,deleteProductById,updateProduct,productCount

} = require('../controllers/product.controller');

router.route('/')
    .post(createProduct)
    .get(getProducts);
router.route('/getcount').get(productCount);
router.route('/:id').get(getProductById).delete(deleteProductById).patch(updateProduct);
module.exports = router;
