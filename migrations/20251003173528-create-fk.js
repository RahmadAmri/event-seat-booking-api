'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // This migration is now handled in the create-booking migration
    // Keeping it empty to maintain migration history
  },

  async down (queryInterface, Sequelize) {
    // Nothing to revert
  }
};
