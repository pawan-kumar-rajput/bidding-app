'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Notifications', [
      {
        message: 'This is a test notification 1',
        userId: 1,
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        message: 'This is a test notification 2',
        userId: 2,
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        message: 'This is a test notification 3',
        userId: 1,
        isRead: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Notifications', null, {});
  },
};
