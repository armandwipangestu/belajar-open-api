'use strict';

var utils = require('../utils/writer.js');
var Todolist = require('../service/TodolistService');

module.exports.todolistGET = function todolistGET (req, res, next, include_done, name) {
  Todolist.todolistGET(include_done, name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todolistPOST = function todolistPOST (req, res, next, body) {
  Todolist.todolistPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todolistTodolistIdDELETE = function todolistTodolistIdDELETE (req, res, next, todolistId) {
  Todolist.todolistTodolistIdDELETE(todolistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todolistTodolistIdPUT = function todolistTodolistIdPUT (req, res, next, body, todolistId) {
  Todolist.todolistTodolistIdPUT(body, todolistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
