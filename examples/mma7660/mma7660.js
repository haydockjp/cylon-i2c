"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    edison: { adaptor: "intel-iot" }
  },

  devices: {
    accel: { driver: "mma7660" }
  },

  work: function(my) {
    every((1).second(), function() {
      my.accel.getAccel(function(err, data) {
        if (err) { console.error(err); }
        console.log(data);
      });
    });
  }
}).start();
