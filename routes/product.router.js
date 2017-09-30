var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Product = require('../models/product.model');


router.get('/', function(req, res, next) {
  Product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.post('/', function(req, res, next) {
  Product.create(req.body.product, (err, product) => {
      if (err) res.send(err);
      res.json(product);
    });
});

router.get('/:id', function(req, res, next) {
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    res.json(product);
  });
});

router.delete('/:id', function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, function (err, product) {
        if (err) return next(err);
        res.sendStatus(204);
  });
});

router.put('/:id', function(req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body.product }, { new: true }, (err, product) => {
        if (err) return next(err);
        res.json(product);
  });
});

module.exports = router;