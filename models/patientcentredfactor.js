'use strict';
module.exports = (sequelize, DataTypes) => {
  var PatientCentredFactor = sequelize.define('PatientCentredFactor', {
    label: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PatientCentredFactor;
};