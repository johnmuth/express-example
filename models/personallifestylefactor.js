'use strict';
module.exports = (sequelize, DataTypes) => {
  var PersonalLifestyleFactor = sequelize.define('PersonalLifestyleFactor', {
    label: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PersonalLifestyleFactor;
};