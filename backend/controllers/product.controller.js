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
        next(error);
    } 
}

exports.getProducts = async (req, res, next) => {
    try{

        // const {category} = req.query;
        // const filter = {};
        // if(category){
        //     filter.category = {
        //         $regex:category,
        //         $options:"i"
        //     };
        // }
        // const products = await productModel.find(filter);
        // res.status(200).json({
        //     success:true,
        //     products
        // });
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const paginationProducts = await productModel.find().skip(skip).limit(limit);
        if(paginationProducts){
            return res.status(200).json({
                success:true,
                paginationProducts
            });   
        }
        const products = await productModel.find();
        return res.status(200).json({
            success:true,
            products
        });   
    }
    catch(error){
        next(error)
    }
}
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

exports.productCount = async (req,res,next) => {
    try{
        const productCount = await  productModel.countDocuments();
        return res.status(200).json({
            success:true,
            message:"Product Count is",
            productCount
        })
    }
    catch(error){
        next(error);
    }
}
exports.updateProduct = async (req,res,next) => {
    try{
        const {id} = req.params;
        const allowFields  = [
            'name',
            'description',
            'price',
            'category',
            'brand',
            'stock',
            'rating',
            'image'
        ]
        const updates = {};
        for(const field of allowFields) {
            if(Object.hasOwn(req.body, field)){
                updates[field] = req.body[field]
            }
        }
        if(Object.keys(updates).length === 0){
            return res.status(400).json({
                success:false,
                message:'Provide at least one valid field to update'
            })
        }
        const updatedProduct = await productModel.findByIdAndUpdate(id,{$set:updates},{
            new:true,
            runvalidators:true
        })
        if(!updatedProduct){
            return res.json({
                success:false,
                message:"Product not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Product updated Successfully",
            data:updatedProduct
        });
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