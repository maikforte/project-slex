const express = require('express');

module.exports = (route, controller) => {
    route.use('/hello-world', express.Router()
        .get('/:name', async (req, res) => {
            const { name } = req.params;
            const response = controller.sayHello(name);
            res.send(response);
        })
        .get('/', async (req, res) => {
            const response = controller.getHelloWorld();
            res.send(response);
        }));

    return route;
};
