'use strict';
const { faker } = require("@faker-js/faker");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    const assets = ["btc", "eth", "doge", "hitop", "vex", "aave", "usdt"];
    
    for (let asset of assets) {
      await queryInterface.bulkInsert('Assets', [{
        name: asset.toUpperCase(),
        price: faker.datatype.bigInt({
          min: 0,
          max: 1000000000
        }),
        lastPrice: 0,
        status: "up"
     }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Assets', null, {});
  }
};
