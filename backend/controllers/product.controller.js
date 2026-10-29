const productModel = require('../models/product.model');
exports.createProduct =async (req, res, next) => {
    try{
        const product = await  productModel.create(req.body);


        if(!product){
            res.status(404).json({
                success:false,
                message:'you should provide product data',
            });
        }
        res.status(201).json({
            success: true,
            message: 'Product is created ',
            product
        });
    }
    catch(error){
        next(error.message);
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
        if(!product){
            return res.status(404).json({
                success:false,
                messaage:"Product Not Found"
            });
        }
        res.status(200).json({
            success:true,
            product
        })
    }
    catch(error){
        next(error);
    }
}
exports.updateProduct = async (req,res,next) => {
    try{
        const {id} = req.params;
        const updateProduct = await  productModel.findById(id);
        if(!updateProduct){
            return res.status(404).json({
                success:false,
                message:"Product Not Found"
            })
        }
        res.status(201).json({
            success:true,
            updateProduct
        })
    }
    catch(error){
        next(error);
    }
}
exports.deleteProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteUser = await productModel.findByIdAndDelete(id);
        if(!deleteUser){
            return res.status(404).json({
                success:false,
                message:"Product not Found"
            })
        }
        res.status(200).json({
            success:true,
            message:"Product deleted Successfully"
        });

    } catch (error) {
        next(error);
    }
};