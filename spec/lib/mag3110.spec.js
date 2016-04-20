"use strict";

var MAG3110 = lib("mag3110");

describe("Cylon.Drivers.I2C.MAG3110", function() {
  var driver;

  beforeEach(function() {
    driver = new MAG3110({
      name: "compass",
      connection: {}
    });
  });

  describe("#constructor", function() {
    it("sets @address to 0x21 by default", function() {
      expect(driver.address).to.be.eql(0x0E);
    });
  });

  describe("#commands", function() {
    it("is an object containing MAG3110 commands", function() {
      for (var c in driver.commands) {
        expect(driver.commands[c]).to.be.a("function");
      }
    });
  });

  describe("#getMag", function() {
    it("needs tests here");
  });

  describe("#_initMag", function() {
    it("needs tests here");
  });
});
