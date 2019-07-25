const express = require('express');
const router = express.Router();

const Order = require('../models/order_model');


router.get('/orders', function (req, res) {
    Order.prototype
        .get()
        .then(order => {
            res.send(Order);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


router.get('/getById', function (req, res) {
    Order.prototype
        .getOrderById(req.body.id)
        .then(orders => {
            res.send(order);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});



module.exports = router;