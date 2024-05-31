'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bids', [
      {
        itemId: 1,
        userId: 1,
        bidAmount: 120.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 1,
        userId: 2,
        bidAmount: 130.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 2,
        userId: 1,
        bidAmount: 220.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bids', null, {});
  }
};
