const bcrypt = require("bcrypt");

const saltRounds = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword1 = await bcrypt.hash("admin", saltRounds);
    const hashedPassword2 = await bcrypt.hash("user", saltRounds);

    return queryInterface.bulkInsert("Users", [
      {
        username: "admin",
        password: hashedPassword1,
        email: "admin@gmail.com",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user",
        password: hashedPassword2,
        email: "user@gmail.com",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
