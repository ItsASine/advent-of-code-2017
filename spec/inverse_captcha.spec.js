describe('Inverse Captcha', function() {
  var InverseCaptcha = require('../app/inverse_captcha');

  describe('solveCaptcha()', function() {
    it('solves the first example', function() {
      var answer = InverseCaptcha.solveCaptcha(1122);

      expect(answer).toBe(3);
    });

    it('solves the second example', function() {
      var answer = InverseCaptcha.solveCaptcha(1111);

      expect(answer).toBe(4);
    });

    it('solves the third example', function() {
      var answer = InverseCaptcha.solveCaptcha(1234);

      expect(answer).toBe(0);
    });

    it('solves the fourth example', function() {
      var answer = InverseCaptcha.solveCaptcha(91212129);

      expect(answer).toBe(9);
    });
  });

  describe('solveCaptchaPart2()', function() {
    it('solves the first example', function() {
      var answer = InverseCaptcha.solveCaptchaPart2(1212);

      expect(answer).toBe(6);
    });

    it('solves the second example', function() {
      var answer = InverseCaptcha.solveCaptchaPart2(1221);

      expect(answer).toBe(0);
    });

    it('solves the third example', function() {
      var answer = InverseCaptcha.solveCaptchaPart2(123425);

      expect(answer).toBe(4);
    });

    it('solves the fourth example', function() {
      var answer = InverseCaptcha.solveCaptchaPart2(123123);

      expect(answer).toBe(12);
    });

    it('solves the fifth example', function() {
      var answer = InverseCaptcha.solveCaptchaPart2(12131415);

      expect(answer).toBe(4);
    });
  });

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = InverseCaptcha.day1();

      expect(answer).toBe(1141);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = InverseCaptcha.part2();

      expect(answer).toBe(950);
    });
  });
});
