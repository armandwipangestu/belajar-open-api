'use strict';


/**
 * Get All TodoList
 * Get all active todolist by default
 *
 * include_done Boolean Include done todolist in the result (optional)
 * name String Filter todolist by name (optional)
 * returns ArrayTodolist
 **/
exports.todolistGET = function(include_done,name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : "id",
  "priority" : 0.8008281904610115,
  "tags" : [ "tags", "tags" ]
}, {
  "name" : "name",
  "id" : "id",
  "priority" : 0.8008281904610115,
  "tags" : [ "tags", "tags" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create new Todolist
 * Create new Todolist to database
 *
 * body CreateOrUpdateTodolist 
 * returns Todolist
 **/
exports.todolistPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : "id",
  "priority" : 0.8008281904610115,
  "tags" : [ "tags", "tags" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete existing todolist
 * Delete existing todolist in database
 *
 * todolistId String Todolist id for updated
 * returns inline_response_200
 **/
exports.todolistTodolistIdDELETE = function(todolistId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update exisiting todolist
 * Update existing todolist in database
 *
 * body CreateOrUpdateTodolist 
 * todolistId String Todolist id for updated
 * returns Todolist
 **/
exports.todolistTodolistIdPUT = function(body,todolistId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : "id",
  "priority" : 0.8008281904610115,
  "tags" : [ "tags", "tags" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

