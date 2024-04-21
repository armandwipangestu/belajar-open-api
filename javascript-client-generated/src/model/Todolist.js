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
import ApiClient from '../ApiClient';

/**
 * The Todolist model module.
 * @module model/Todolist
 * @version 1.0.0
 */
export default class Todolist {
  /**
   * Constructs a new <code>Todolist</code>.
   * @alias module:model/Todolist
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Todolist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Todolist} obj Optional instance to populate.
   * @return {module:model/Todolist} The populated <code>Todolist</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Todolist();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Todolist.prototype.id = undefined;

/**
 * @member {String} name
 */
Todolist.prototype.name = undefined;

/**
 * @member {Number} priority
 */
Todolist.prototype.priority = undefined;

/**
 * @member {Array.<String>} tags
 */
Todolist.prototype.tags = undefined;

