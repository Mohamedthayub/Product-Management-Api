const express = require('express');
const connectDatabase = require('./config/db');
const productRoutes = require('./routes/product.routes');
const  app = express();

connectDatabase();


app.use(express.json());


app.use('/api/v1/products', productRoutes);
app.listen(4000, () => {
    console.log('http://localhost:4000');
});
