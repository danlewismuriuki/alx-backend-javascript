const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');


describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;

    beforeEach(function () {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        consoleLogSpy.restore();
        sinon.restore();
    });

    it('should log the correct total for inputs 100 and 20', function () {
        sinon.stub(Utils, 'calculateNumber').returns(120);
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    });


    it('should log the correct total for inputs 10 and 10', function () {
        sinon.stub(Utils, 'calculateNumber').returns(20);
        sendPaymentRequestToApi(10, 10);
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    });

});