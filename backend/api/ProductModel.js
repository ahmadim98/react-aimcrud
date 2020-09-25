'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the product !'
  },
  type: {
    type: String,
    required: 'Enter the type !'
  },
  quantity: {
    type: Number,
    required: 'Enter the quantity !'
  },
});

module.exports = mongoose.model('products', ProductSchema);