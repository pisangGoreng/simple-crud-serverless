const Sequelize = require('sequelize');

// endpoint elephantSQL
const sequelize = new Sequelize('postgres://bnnrokqe:wGmA5T3MxeQYsYVc88N_WgGN9pTMndVf@pellefant.db.elephantsql.com:5432/bnnrokqe');

const todo = require('./models/todo')(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  todo
};

db.sequelize.sync();

module.exports = db;
