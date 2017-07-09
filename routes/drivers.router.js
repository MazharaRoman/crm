var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Driver = require('../models/driver.model.js');


router.get('/', function(req, res, next) {
  Driver.find(function (err, drivers) {
    if (err) return next(err);
    res.json(drivers);
  });
});

router.post('/', function(req, res, next) {
  Driver.create(req.body.driver, (err, driver) => {
      if (err) res.send(err);
      res.json(driver);
    });
});

router.get('/:id', function(req, res, next) {
  Driver.findById(req.params.id, (err, driver) => {
    if (err) return next(err);
    res.json(driver);
  });
});

router.delete('/:id', function(req, res, next) {
  Driver.findByIdAndRemove(req.params.id, function (err, driver) {
        if (err) return next(err);
        res.sendStatus(204);
  });
});

router.put('/:id', function(req, res, next) {
    Driver.findByIdAndUpdate(req.params.id, { $set: req.body.driver }, { new: true }, (err, driver) => {
        if (err) return next(err);
        res.json(driver);
  });
});

module.exports = router;