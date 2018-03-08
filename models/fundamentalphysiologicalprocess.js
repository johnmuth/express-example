'use strict';
module.exports = (sequelize, DataTypes) => {
  var FundamentalPhysiologicalProcess = sequelize.define('FundamentalPhysiologicalProcess', {
    label: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return FundamentalPhysiologicalProcess;
};