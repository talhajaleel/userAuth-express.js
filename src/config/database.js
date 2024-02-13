// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('userAuthDb', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
