const mysqlConn = require('../database/database');
const order_model = require('../database/database')
fs = require('fs');

module.exports= class Order{
    
    constructor(product, size, price, is_round_trip, date_created, date_scheduled, parcel_size, num_of_parcels){
this.product =product;
this.size =size;
this.is_round_trip =is_round_trip;
this.date_created =date_created;
this.date_scheduled =date_scheduled;
this.parcel_size =parcel_size;
this.num_of_parcels =num_of_parcels;
    }
}


