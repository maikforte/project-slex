const express = require('express');
const bodyParser = require('body-parser');

const controller = require('./hello-world.controller')();
const router = require('./hello-world.router');

module.exports = () => {
    const route = express.Router();
    route.use(bodyParser.json());

    return router(route, controller);
};
