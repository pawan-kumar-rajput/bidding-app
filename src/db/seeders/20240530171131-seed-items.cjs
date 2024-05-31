"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Items",
      [
        {
          name: "Diamond1",
          description: "Description for Diamond1",
          startingPrice: 100.0,
          currentPrice: 100.0,
          imageUrl: "/uploads/Diamond1.jpeg",
          endTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // 24 hours from now
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Diamond2",
          description: "Description for Diamond2",
          startingPrice: 200.0,
          currentPrice: 200.0,
          imageUrl: "/uploads/Diamond2.jpeg",
          endTime: new Date(new Date().getTime() + 48 * 60 * 60 * 1000), // 48 hours from now
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
