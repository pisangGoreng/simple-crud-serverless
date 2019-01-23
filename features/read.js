'use strict';
const db = require('../db');

module.exports.getTodo = async (event, context) => {
  const todo = 'make dinner';
  return {
    statusCode: 200,
    body: JSON.stringify({
      todo: todo
    })
  };
};

module.exports.listTodos = (event, context, callback) => {
  db.todo
    .findAll({
      attributes: ['id', 'task', 'completed']
    })
    .then(todos => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          todos: todos
        })
      });
    });
};
