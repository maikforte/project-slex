require('chai').should();

const controller = require('./hello-world.controller')();

describe('Hello World Controller', () => {
    describe('.getHelloWorld()', () => {
        it('should return "Hello World"', () => {
            const expectedReturn = 'Hello World';
            const returnValue = controller.getHelloWorld();
            returnValue.should.equal(expectedReturn);
        });
    });

    describe('.sayHello()', () => {
        it('should return "Hello <given_name>"', () => {
            const expectedReturn = 'Hello Maik';
            const returnValue = controller.sayHello('Maik');
            returnValue.should.equal(expectedReturn);
        });
    });
});
