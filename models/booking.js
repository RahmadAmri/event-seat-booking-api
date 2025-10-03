"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Event, {
        foreignKey: "event_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Booking.init(
    {
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Booking",
      indexes: [
        {
          unique: true,
          fields: ["event_id", "user_id"],
          name: "unique_event_user_booking",
        },
      ],
    }
  );
  return Booking;
};
