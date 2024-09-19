// 0-calcul.test.js
const assert = require('assert');
const { calculateNumber } = require('./0-calcul');

describe('calculateNumber', function() {
  it('should correctly round and sum positive numbers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should correctly round and sum positive numbers', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should correctly round and sum positive float numbers', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should correctly round and sum numbers that are exactly halfway between two integers', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
