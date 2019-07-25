var Product = require("../models/product_model");

module.exports = class ProductService {

        constructor() {}

        create(newProduct) {
            return new Promise((resolve, reject) => {
                Product.create(newProduct)
                    .then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    });
            });
        }

        getById(id) {
            return new Promise((resolve, reject) => {
                Product.getById(id)
                    .then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    })
            })
        }

        getByMerchant(merchantId) {
            return new Promise((resolve, reject) => {
                Product.getByMerchant(merchantId)
                    .then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    });
            })
        }

        update(id, product) {
            return new Promise((resolve, reject) => {
                Product.update(id, product)
                    .then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    });
            })
        }

        delete(id) {
            return new Promise((resolve, reject) => {
                Product.delete(id)
                    .then(result => {
                        resolve(result);
                    }).catch(err => {
                        reject(err);
                    });
            })
        }



    } -
    -
    -
    product routes:
    //Router
    const express = require('express');
const router = express.Router();

//Product Service
const PS = require('../services/product_service');
const productService = new PS();


router.post("/create", (req, res) => {
    productService.create(req.body)
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
})

router.post("/getById", (req, res) => {
    productService.getById(req.body.id)
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
})

router.post("/getByMerchant", (req, res) => {
    productService.getByMerchant(req.body.merchantId)
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
})

router.post("/update", (req, res) => {
    productService.update(req.body.id, req.body)
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
})

router.post("/delete", (req, res) => {
    productService.delete(req.body.id)
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400).send(err);
        })
})


module.exports = router;