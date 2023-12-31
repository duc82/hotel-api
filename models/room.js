"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.hasOne(models.RoomType);
      Room.hasMany(models.Booking);
    }
  }
  Room.init(
    {
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      floor: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
