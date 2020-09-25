'use strict';

var mongoose = require('mongoose');
var Product = mongoose.model('products');

exports.product_list = function(req, res) {
    Product.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.new_product = function(req, res) {
  var product = new Product(req.body);
  product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.read_product = function(req, res) {
    Product.findById(req.params.productID, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.update_product = function(req, res) {
    Product.findOneAndUpdate({_id: req.params.productID}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.delete_a_task = function(req, res) {
    Product.remove({
    _id: req.params.productID
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};