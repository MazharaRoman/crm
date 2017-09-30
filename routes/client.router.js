var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Client = require('../models/Client.model.js');


router.get('/', function(req, res, next) {
  Client.find(function (err, clients) {
    if (err) return next(err);
    res.json(clients);
  });
});

router.post('/', function(req, res, next) {
  Client.create(req.body.client, (err, client) => {
      if (err) res.send(err);
      res.json(client);
    });
});

router.get('/:id', function(req, res, next) {
  Client.findById(req.params.id, (err, client) => {
    if (err) return next(err);
    res.json(client);
  });
});

router.delete('/:id', function(req, res, next) {
  Client.findByIdAndRemove(req.params.id, function (err, client) {
        if (err) return next(err);
        res.sendStatus(204);
  });
});

router.put('/:id', function(req, res, next) {
    Client.findByIdAndUpdate(req.params.id, { $set: req.body.client }, { new: true }, (err, client) => {
        if (err) return next(err);
        res.json(client);
  });
});

module.exports = router;