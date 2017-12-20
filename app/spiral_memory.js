'use strict';

var SpiralMemory = (function() {
  function SpiralMemory() {
    this.input = require('../data/day3.json');
    this.spiral = this.input.spiral;
  }

  SpiralMemory.prototype = {
    day3: function(part2) {
      var self = this;

      return !part2 ?
          true :
          null;
    },

    steps: function(spiralEndNumber) {
      // fuck this
    },

    part2: function() {
      return this.day1(true);
    }
  };

  return SpiralMemory;
}());

module.exports = new SpiralMemory();
