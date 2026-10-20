const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/product-management'
        );

        console.log('Database Connected');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDatabase;