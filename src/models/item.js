import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Item = sequelize.define("Item", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  startingPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  currentPrice: {
    type: DataTypes.DECIMAL,
    defaultValue: 0,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Item;
