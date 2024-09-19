// 0-calcul.test.js
const assert = require('assert');
const { calculateNumber } = require('./0-calcul');

describe('calculateNumber', function() {
  it('should round 1.0 and 2.0 to 1 and 2, then return their sum as 3', function() {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('should round 1.0 to 1 and 2.4 to 2, then return their sum as 3', function() {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('should round 1.2 to 1 and 3.4 to 3, then return their sum as 4', function() {
    assert.strictEqual(calculateNumber(1.2, 3.4), 4);
  });

  it('should round 1.4 to 1 and 3.4 to 3, then return their sum as 4', function() {
    assert.strictEqual(calculateNumber(1.4, 3.4), 4);
  });

  it('should round 1.4 to 1 and 2.0 to 2, then return their sum as 3', function() {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('should round 1.0 to 1 and 3.5 to 4, then return their sum as 5', function() {
    assert.strictEqual(calculateNumber(1.0, 3.5), 5);
  });

  it('should round 1.6 to 2 and 3.5 to 4, then return their sum as 6', function() {
    assert.strictEqual(calculateNumber(1.6, 3.5), 6);
  });

  it('should round 2.6 to 3 and 2.0 to 2, then return their sum as 5', function() {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('should round 2.499999 to 2 and 3.49999 to 3, then return their sum as 5', function() {
    assert.strictEqual(calculateNumber(2.499999, 3.49999), 5);
  });

  it('should handle zero values correctly', function() {
    assert.strictEqual(calculateNumber(0.0, 0.0), 0);
    assert.strictEqual(calculateNumber(0.4, 0.6), 1);
  });

  it('should handle negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(-1.4, -2.0), -3);
    assert.strictEqual(calculateNumber(-1.6, -2.4), -4);
  });

  it('should handle large numbers correctly', function() {
    assert.strictEqual(calculateNumber(1234567.4, 9876543.6), 11111111);
  });

  it('should handle exact halfway rounding cases', function() {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
  });

});
