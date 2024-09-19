const assert = require('assert');
const { calculateNumber } = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });

  it('rounding down a and b integers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('rounding down a and b float and a integer', function(){
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  })

  it('rounding down a and b float and a float integer', function(){
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  })

  it('rounding up a and b float', function(){
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  })

  it('rounding down a and b float and a negative integer', function(){
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  })

  it('rounding down a and b 0 integer', function(){
    assert.strictEqual(calculateNumber(0, 0), 0);
  })

  it('rounding down a and b float and a long positive integer', function(){
    assert.strictEqual(calculateNumber(1000000.4, 999999.5), 2000000);
  })

});