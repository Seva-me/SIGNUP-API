'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('students','blood_group',{type:Sequelize.ENUM('A+','B+','O+','O-','A-','B-','AB+','AB-')});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('students','blood_group',{type:Sequelize.STRING('A+','B+','O+','O-','A-','B-','AB+','AB-')});
  }
};
