'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      
    }
  }

  Message.init(
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      owner: {
        type: DataTypes.ENUM('USER', 'SYSTEM'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Message',
      timestamps: true,
    }
  );

  return Message;
};
