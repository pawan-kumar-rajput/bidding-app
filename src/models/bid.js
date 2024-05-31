import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Bid = sequelize.define("Bid", {
  itemId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Items",
      key: "id",
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users",
      key: "id",
    },
  },
  bidAmount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Bid;
