'use strict';
module.exports = (sequelize, DataTypes) => {
  var PubmedArticle = sequelize.define('PubmedArticle', {
    pmid: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //models.PubmedArticle.HasOne(models.AllocationConcealment)
      }
    }
  });
  return PubmedArticle;
};