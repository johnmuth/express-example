'use strict';
module.exports = (sequelize, DataTypes) => {
  var BioactiveSubstance = sequelize.define('BioactiveSubstance', {
    label: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BioactiveSubstance;
};