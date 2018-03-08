'use strict';
module.exports = (sequelize, DataTypes) => {
  var FundamentalClinicalImbalance = sequelize.define('FundamentalClinicalImbalance', {
    label: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return FundamentalClinicalImbalance;
};