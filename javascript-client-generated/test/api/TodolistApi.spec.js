/*
 * TodoList RESTful API
 * OpenAPI for Todolist RESTful API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: armandwi.pangestu7@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TodoListResTfulApi);
  }
}(this, function(expect, TodoListResTfulApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TodoListResTfulApi.TodolistApi();
  });

  describe('(package)', function() {
    describe('TodolistApi', function() {
      describe('todolistGet', function() {
        it('should call todolistGet successfully', function(done) {
          // TODO: uncomment, update parameter values for todolistGet call and complete the assertions
          /*
          var opts = {};

          instance.todolistGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TodoListResTfulApi.ArrayTodolist);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('todolistPost', function() {
        it('should call todolistPost successfully', function(done) {
          // TODO: uncomment, update parameter values for todolistPost call and complete the assertions
          /*

          instance.todolistPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TodoListResTfulApi.Todolist);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('todolistTodolistIdDelete', function() {
        it('should call todolistTodolistIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for todolistTodolistIdDelete call and complete the assertions
          /*

          instance.todolistTodolistIdDelete(todolistId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TodoListResTfulApi.InlineResponse200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('todolistTodolistIdPut', function() {
        it('should call todolistTodolistIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for todolistTodolistIdPut call and complete the assertions
          /*

          instance.todolistTodolistIdPut(body, todolistId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TodoListResTfulApi.Todolist);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
