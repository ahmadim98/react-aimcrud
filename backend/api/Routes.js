'use strict';

module.exports = function(app) {
  var ProductList = require('./ProductController');

  // aimcrud routes
  app.route('/product')
    .get(ProductList.product_list)
    .post(ProductList.new_product);


  app.route('/product/:productID')
    .get(ProductList.read_product)
    .put(ProductList.update_product)
    .delete(ProductList.delete_a_task);
};