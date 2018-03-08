'use strict';
module.exports = (sequelize, DataTypes) => {
  var EnvironmentInput = sequelize.define('EnvironmentInput', {
    label: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return EnvironmentInput;
};