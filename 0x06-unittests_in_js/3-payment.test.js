const sinon = require('sinon');
const Utils = require('./utils');
//import chai from 'chai';

//import { expect } from 'chai';

const chai =  require('chai');
const { expect } = chai;

const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.CalcukateNumber with correct args', function () {
        // set the module and method to spy on
        const spy = sinon.spy(Utils, 'calculateNumber');

        // Execute 
        sendPaymentRequestToApi(100, 20);

        //check the spy was called atlest once
        expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

        spy.restore();
    });
});