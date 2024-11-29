'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs' , [
    {
      titulo: "Espress",
      contenido: "creacion de backend para blog en js ",
      autor: "imelda",
      fecha: new Date (),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      titulo: "Sequelize",
      contenido: "ORM para node.js ",
      autor: "ramon",
      fecha: new Date (),
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blogs', null,{})
  }
};
