"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          name: "Tech Conference 2025",
          total_seats: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Music Festival",
          total_seats: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Workshop: Node.js Basics",
          total_seats: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Events", null, {});
  },
};
