var order = require("../models/order_model");
var connection = require('../database/database');


module.exports = class OrderServices {
  constructor() {}

  getOrder() {
  order.get('/orders', (req,res)=>{
    connection.query('SELECT * FROM Orders',(err,rows,fields)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
  }
  
  )
}
}