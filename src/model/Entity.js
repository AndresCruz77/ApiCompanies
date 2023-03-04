/*
 * Test SOYYO
 * Test ingreso soyyo
 *
 * OpenAPI spec version: 1.0
 * Contact: neonacc@hotmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The Entity model module.
 * @module model/Entity
 * @version 1.0
 */
export class Entity {
  /**
   * Constructs a new <code>Entity</code>.
   * @alias module:model/Entity
   * @class
   * @param name {String} 
   * @param identificationNumber {String} 
   * @param expirationDate {String} 
   * @param contactName {String} 
   * @param contactEmail {String} 
   */
  constructor(name, identificationNumber, expirationDate, contactName, contactEmail) {
    this.name = name;
    this.identificationNumber = identificationNumber;
    this.expirationDate = expirationDate;
    this.contactName = contactName;
    this.contactEmail = contactEmail;
  }

  /**
   * Constructs a <code>Entity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Entity} obj Optional instance to populate.
   * @return {module:model/Entity} The populated <code>Entity</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Entity();
      if (data.hasOwnProperty('entityId'))
        obj.entityId = ApiClient.convertToType(data['entityId'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('identificationNumber'))
        obj.identificationNumber = ApiClient.convertToType(data['identificationNumber'], 'String');
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'String');
      if (data.hasOwnProperty('contactName'))
        obj.contactName = ApiClient.convertToType(data['contactName'], 'String');
      if (data.hasOwnProperty('contactEmail'))
        obj.contactEmail = ApiClient.convertToType(data['contactEmail'], 'String');
      if (data.hasOwnProperty('logo'))
        obj.logo = ApiClient.convertToType(data['logo'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} entityId
 */
Entity.prototype.entityId = undefined;

/**
 * @member {String} name
 */
Entity.prototype.name = undefined;

/**
 * @member {String} identificationNumber
 */
Entity.prototype.identificationNumber = undefined;

/**
 * @member {String} expirationDate
 */
Entity.prototype.expirationDate = undefined;

/**
 * @member {String} contactName
 */
Entity.prototype.contactName = undefined;

/**
 * @member {String} contactEmail
 */
Entity.prototype.contactEmail = undefined;

/**
 * @member {String} logo
 */
Entity.prototype.logo = undefined;

