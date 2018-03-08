'use strict';
module.exports = (sequelize, DataTypes) => {
  var FunctionalLaboratoryTesting = sequelize.define('FunctionalLaboratoryTesting', {
    label: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return FunctionalLaboratoryTesting;
};