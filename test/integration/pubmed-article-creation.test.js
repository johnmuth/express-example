'use strict';

var app      = require('../../app');
var Bluebird = require('bluebird');
var expect   = require('expect.js');
var request  = require('supertest');

describe('pubmed-article creation page', function () {
  before(function () {
      return require('../../models').sequelize.sync();
  });
  
  beforeEach(function () {
    this.models = require('../../models');
    return Bluebird.all([
      this.models.PubmedArticle.destroy({ truncate: true })
    ]);
  });

  it('loads correctly', function (done) {
    request(app).get('/pubmed-articles').expect(200, done);
  });

  it('lists a pubmed-article if there is one', function (done) {
    this.models.PubmedArticle.create({ pmid: '123456' }).then(function () {
      request(app).get('/pubmed-articles').expect(/123456/, done);
    })
  });

});
