'use strict';

var InverseCaptcha = (function() {
  function InverseCaptcha() {
    this.input = require('../data/day1.json');
    this.captcha = this.input.captcha;
  }

  InverseCaptcha.prototype = {
    day1: function(part2) {
      var self = this;

      return !part2 ?
          self.solveCaptcha(self.captcha) :
          self.solveCaptchaPart2(self.captcha);
    },

    solveCaptcha: function(captcha) {
      var array = captcha.toString().split('');
      var answer = 0;

      array.forEach(function(digit, index, parent) {
        if (index !== parent.length - 1) {
          if (digit === parent[index + 1]) {
            answer += +parent[index + 1];
          }
        } else {
          if (digit === parent[0]) {
            answer += +parent[0];
          }
        }
      });

      return answer;
    },

    solveCaptchaPart2: function(captcha) {
      var array = captcha.toString().split('');
      var answer = 0;
      var halfSteps = array.length / 2;
      var circularIndex = 0;

      array.forEach(function(digit, index, parent) {
        if (index < halfSteps) {
          if (digit === parent[index + halfSteps]) {
            answer += +parent[index + halfSteps];
          }
        } else {
          circularIndex = -(parent.length - (index + halfSteps));

          if (digit === parent[circularIndex]) {
            answer += +parent[circularIndex];
          }
        }
      });

      return answer;
    },

    part2: function() {
      return this.day1(true);
    }
  };

  return InverseCaptcha;
}());

module.exports = new InverseCaptcha();
