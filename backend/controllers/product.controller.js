const productModel = require('../models/product.model');
exports.createProduct =async (req, res, next) => {
    try{
        const product = await  productModel.create(req.body);
    
        res.status(201).json({
            success: true,
            message: 'Product is created ',
            product
        });
    }
    catch(error){
        next(error);
    } 
}

exports.getProducts = async (req, res, next) => {
    try{
        const products = await productModel.find();
        res.status(200).json({
            success:true,
            products
        });
    }
    catch(error){
        next(error)
    }
};
exports.getProductById = async (req,res,next) => {
    try{
        const product = await productModel.findById(req.params.id);
        res.status(200).json({
            success:true,
            product
        })
    }
    catch(error){
        next(error);
    }
}