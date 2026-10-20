
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
            trim: true,
            minlength: [3, 'Name must contain at least 3 characters'],
            maxlength: [100, 'Name cannot exceed 100 characters']
        },

        description: {
            type: String,
            trim: true,
            maxlength: [1000, 'Description cannot exceed 1000 characters']
        },

        price: {
            type: Number,
            required: [true, 'Product price is required'],
            min: [0.01, 'Price must be greater than 0']
        },

        category: {
            type: String,
            required: [true, 'Product category is required'],
            trim: true
        },

        brand: {
            type: String,
            trim: true,
            maxlength: [50, 'Brand cannot exceed 50 characters']
        },

        stock: {
            type: Number,
            required: [true, 'Product stock is required'],
            min: [0, 'Stock cannot be negative'],
            validate: {
                validator: Number.isInteger,
                message: 'Stock must be a whole number'
            }
        },

        rating: {
            type: Number,
            default: 0,
            min: [0, 'Rating cannot be less than 0'],
            max: [5, 'Rating cannot exceed 5']
        },

        image: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
