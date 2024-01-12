'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          category_id: 1,
          title: 'Коста-Рика Ла Лупа иp бочки',
          image:
            'https://theweldercatherine.ru/upload/resize_cache/iblock/14e/vbbhfrna470kuj0cjsxt5a6hf5jxpqrz/300_300_1/photo_2023_12_25-2.26.19-PM.jpeg',
          price: '1327',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          title: 'Боливия Флорипондио',
          image:
            'https://theweldercatherine.ru/upload/resize_cache/iblock/e31/pss82mcxm2abelfpgqc5bm9i1nd2lp80/300_300_1/250g-_1_.png',
          price: '1085',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          title: 'Гватемала Арналдо Лопес и соседи',
          image:
            'https://theweldercatherine.ru/upload/resize_cache/iblock/1de/8r3phxj959y5vdgth1oq8q794fgxnqhb/300_300_1/250g-_1_.png',
          price: '890',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          title: 'Mr. Kranch',
          image:
            'https://shop-cdn1-2.vigbo.tech/shops/196472/products/22234217/images/3-c7421cfc0e029fb848cadc09585584c7.jpg',
          price: '699',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          title: 'Mr. Kranch',
          image:
            'https://shop-cdn1-2.vigbo.tech/shops/196472/products/22234220/images/3-344105c1ec7ea763de83b3935d705151.jpg',
          price: '1199',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          title: 'Mr. Kranch',
          image:
            'https://shop-cdn1-2.vigbo.tech/shops/196472//products/22234799/images/preview-8726a0d4d52d64e7b852d32c674d8f8f.jpg',
          price: '1499',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
