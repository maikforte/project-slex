module.exports = () => {
    const getHelloWorld = () => 'Hello World';

    const sayHello = name => `Hello ${name}`;

    return {
        getHelloWorld,
        sayHello,
    };
};
