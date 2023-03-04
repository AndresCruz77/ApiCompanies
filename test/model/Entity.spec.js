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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TestSoyyo);
  }
}(this, function(expect, TestSoyyo) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Entity', function() {
      beforeEach(function() {
        instance = new TestSoyyo.Entity();
      });

      it('should create an instance of Entity', function() {
        // TODO: update the code to test Entity
        expect(instance).to.be.a(TestSoyyo.Entity);
      });

      it('should have the property entityId (base name: "entityId")', function() {
        // TODO: update the code to test the property entityId
        expect(instance).to.have.property('entityId');
        // expect(instance.entityId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property identificationNumber (base name: "identificationNumber")', function() {
        // TODO: update the code to test the property identificationNumber
        expect(instance).to.have.property('identificationNumber');
        // expect(instance.identificationNumber).to.be(expectedValueLiteral);
      });

      it('should have the property expirationDate (base name: "expirationDate")', function() {
        // TODO: update the code to test the property expirationDate
        expect(instance).to.have.property('expirationDate');
        // expect(instance.expirationDate).to.be(expectedValueLiteral);
      });

      it('should have the property contactName (base name: "contactName")', function() {
        // TODO: update the code to test the property contactName
        expect(instance).to.have.property('contactName');
        // expect(instance.contactName).to.be(expectedValueLiteral);
      });

      it('should have the property contactEmail (base name: "contactEmail")', function() {
        // TODO: update the code to test the property contactEmail
        expect(instance).to.have.property('contactEmail');
        // expect(instance.contactEmail).to.be(expectedValueLiteral);
      });

      it('should have the property logo (base name: "logo")', function() {
        // TODO: update the code to test the property logo
        expect(instance).to.have.property('logo');
        // expect(instance.logo).to.be(expectedValueLiteral);
      });

    });
  });

}));
