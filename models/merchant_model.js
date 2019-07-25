const mysqlConn = require('../database/database');
const merchant_data = require('../data/merchant_data.json');
fs = require('fs');

module.exports = class Merchant {

    constructor(id, first_name, last_name, cell_number, email) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.cell_number = cell_number;
        this.email = email;
    }



}