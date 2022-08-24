'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
      name: 'John Doe',
      email: 'anyemail',
      password: 'anypassword',
      full_name: 'anyfullname',
      },

      {
        name: 'Teemo',
        email: 'anyemail',
        password: 'anypassword',
        full_name: 'anyfullname',
      },

      {
        name: 'Shen',
        email: 'anyemail',
        password: 'anypassword',
        full_name: 'anyfullname',
      },

      {
        name: 'Morgana',
        email: 'anyemail',
        password: 'anypassword',
        full_name: 'anyfullname',
      },

      {
        name: 'Anivia',
        email: 'anyemail',
        password: 'anypassword',
        full_name: 'anyfullname',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
