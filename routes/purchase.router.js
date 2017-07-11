var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Purchase = require('../models/purchase.model.js');


router.get('/', function(req, res, next) {
  Purchase.findMode(req.query).exec(function (err, purchases) {
    if (err) return next(err);
    res.json(purchases);
  });
});

router.post('/', function(req, res, next) {
  Purchase.create(req.body.purchase, (err, purchase) => {
      if (err) res.send(err);
      res.json(purchase);
    });
});

router.get('/:id', function(req, res, next) {
  Purchase.findMode(req.query, req.params.id).exec((err, purchase) => {
    if (err) return next(err);
    res.json(purchase);
  });
});

router.delete('/:id', function(req, res, next) {
  Purchase.findByIdAndRemove(req.params.id, function (err, purchase) {
        if (err) return next(err);
        res.sendStatus(204);
  });
});

router.put('/:id', function(req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body.purchase }, { new: true }, (err, purchase) => {
        if (err) return next(err);
        res.json(purchase);
  });
});

module.exports = router;