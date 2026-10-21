
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Category name is required'],
            trim: true,
            minlength: [2, 'Category name must contain at least 2 characters'],
            maxlength: [50, 'Category name cannot exceed 50 characters'],
            unique: true
        },
        description: {
            type: String,
            required: [true, 'Category description is required'],
            trim: true,
            maxlength: [500, 'Description cannot exceed 500 characters']
        }
    },
    {
        timestamps: true
    }
);

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
