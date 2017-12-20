describe('Spiral Memory', function() {
  var SpiralMemory = require('../app/spiral_memory');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = SpiralMemory.day1();

      expect(answer).toBeTruthy();
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = SpiralMemory.part2();

      expect(answer).toBeFalsy();
    });
  });
});
