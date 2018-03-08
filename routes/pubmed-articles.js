var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.PubmedArticle.findAll().then(function(pubmedArticles) {
    res.render('pubmed-articles', {
      title: 'PubMed articles',
      pubmedArticles: pubmedArticles
    });
  });
});

router.post('/create', function(req, res) {
  models.PubmedArticle.create({
    pmid: req.body.pmid
  }).then(function() {
    res.redirect('/pubmed-articles');
  });
});

router.get('/:pubmedarticle_id/destroy', function(req, res) {
  models.PubmedArticle.destroy({
    where: {
      id: req.params.pubmedarticle_id
    }
  }).then(function() {
    res.redirect('/pubmed-articles');
  });
});

module.exports = router;
