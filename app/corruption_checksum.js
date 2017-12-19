'use strict';

var CorruptionChecksum = (function() {
  function CorruptionChecksum() {
    this.input = '../data/day2.txt';
  }

  CorruptionChecksum.prototype = {
    day2: function(part2) {
      var fs = require('fs');
      var self = this;

      function readModuleFile(path, callback) {
        try {
          var filename = require.resolve(path);
          fs.readFile(filename, 'utf8', callback);
        } catch (e) {
          callback(e);
        }
      }

      readModuleFile(self.input, function(err, input) {
        var rows = input.split('\n');
        var sum = 0;
        var numbers = [];
        var min = 0;
        var max = 0;

        rows.forEach(function(row) {
          numbers = row.split('\t');

          if (part2) {
            numbers.forEach(function(number, index, array) {
              array.forEach(function(otherNumber, otherIndex) {
                if (index !== otherIndex) {
                  if (number % otherNumber === 0) {
                    sum +=
                        Math.max(number, otherNumber) /
                        Math.min(number, otherNumber);
                  }
                }
              });
            });
          } else {
            max = Math.max.apply(null, numbers);
            min = Math.min.apply(null, numbers);

            sum += (max - min);
          }
        });

        //TODO: Figure out how to return this
        console.log(sum);
      });
    },

    part2: function() {
      return this.day2(true);
    }
  };

  return CorruptionChecksum;
}());

module.exports = new CorruptionChecksum();
