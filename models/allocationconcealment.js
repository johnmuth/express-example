'use strict';
module.exports = (sequelize, DataTypes) => {
  var AllocationConcealment = sequelize.define('AllocationConcealment', {
    label: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return AllocationConcealment;
};