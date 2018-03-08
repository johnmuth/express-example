'use strict';
module.exports = (sequelize, DataTypes) => {
  var NutritionEvidenceKeyword = sequelize.define('NutritionEvidenceKeyword', {
    label: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return NutritionEvidenceKeyword;
};