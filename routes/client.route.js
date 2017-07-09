var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Client = require('../models/client.js');

var Article = mongoose.model('Article', Articles.schema);

router.get('/', function(req, res, next) {
  let skip = Number(req.param('skip', 0));
  let limit = Number(req.param('limit', 0));
  Articles.find(function (err, articles) {
    if (err) return next(err);
    res.json(articles);
  }).skip(skip).limit(limit).sort("-created_at");
});

router.get('/create', function(req, res, next) {
    let article = new Article;
    article.save();
    res.json(article);
});

router.get('/:id', function(req, res, next) {
  Articles.findById(req.params.id, function (err, article) {
    if (err) return next(err);
    res.json(article);
  });
});

router.delete('/:id', function(req, res, next) {
  Articles.findByIdAndRemove(req.params.id, function (err, article) {
        if (err) return next(err);
        res.json(article);
  });
});

router.put('/:id', function(req, res, next) {
    Articles.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, article) {
        if (err) return next(err);
        res.json(article);
  });
});

router.post('/', function(req, res, next) {
    Articles.create(req.body, function(err, article){
        if(err) return next(err);
        res.json(article);
    });
});

module.exports = router;