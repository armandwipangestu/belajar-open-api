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
import ApiClient from './ApiClient';
import ArrayTodolist from './model/ArrayTodolist';
import CreateOrUpdateTodolist from './model/CreateOrUpdateTodolist';
import InlineResponse200 from './model/InlineResponse200';
import Todolist from './model/Todolist';
import TodolistApi from './api/TodolistApi';

/**
* OpenAPI_for_Todolist_RESTful_API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TodoListResTfulApi = require('index'); // See note below*.
* var xxxSvc = new TodoListResTfulApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TodoListResTfulApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TodoListResTfulApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TodoListResTfulApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ArrayTodolist model constructor.
     * @property {module:model/ArrayTodolist}
     */
    ArrayTodolist,

    /**
     * The CreateOrUpdateTodolist model constructor.
     * @property {module:model/CreateOrUpdateTodolist}
     */
    CreateOrUpdateTodolist,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The Todolist model constructor.
     * @property {module:model/Todolist}
     */
    Todolist,

    /**
    * The TodolistApi service constructor.
    * @property {module:api/TodolistApi}
    */
    TodolistApi
};
