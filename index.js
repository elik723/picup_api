const express = require ('express');
const app = express();
const cors = require('cors');

// Allows access from device
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use ((req, res, next) => {
    console.log("This middleware function was executed");
    console.log(req.body);
    next();
});

// route middleware
app.use("/api/user", require("./src/api/user-routes"));
app.use("/api/auth", require ('./src/api/auth-routes'));
app.use("/api/product", require('./src/api/product-routes'));
app.use("/api/merchant", require('./src/api/merchant-routes'));
app.use("/api/order", require('./src/api/order-routes'));
app.use("/api/checkout", require('./src/api/checkout-routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));