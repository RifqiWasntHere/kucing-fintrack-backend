"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CASH extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CASH.belongsTo(models.users);
      models.users.hasMany(CASH);
    }
  }
  CASH.init(
    {
      userId: DataTypes.INTEGER,
      cashName: DataTypes.STRING,
      cashBalance: DataTypes.FLOAT,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "CASH",
    }
  );
  return CASH;
};
