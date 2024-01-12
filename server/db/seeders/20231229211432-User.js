'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'alex@mail.ru',
          password: await bcrypt.hash('123', 10),
          name: 'Alex Coin',
          avatar:
            'https://static.mk.ru/upload/entities/2022/07/21/12/articles/detailPicture/96/f0/5b/38/74b9187ed30c23111af2abb4171776e9.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
