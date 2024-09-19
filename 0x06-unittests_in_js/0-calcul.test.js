import { expect } from 'chai';
import { calculateNumber } from './0-calcul.js';

describe('calculateNumber', function() {
    it('should correctly round and sum positive numbers', function() {
        expect(calculateNumber(4.7, 2.3)).to.equal(7);
        expect(calculateNumber(1.5, 3.7)).to.equal(6);
        expect(calculateNumber(1.2, 3.7)).to.equal(5);
    });

    it('should correctly round and sum positive numbers', function() {
        expect(calculateNumber(1, 3)).to.equal(4);
    });
    it('should correctly round and sum positive float numbers', function() {
        expect(calculateNumber(1, 3.7)).to.equal(5);
    });
    

});