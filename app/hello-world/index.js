const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const controller = require('./hello-world.controller')(axios);
const router = require('./hello-world.router');

module.exports = () => {
    const route = express.Router();
    route.use(bodyParser.json());

    return router(route, controller);
};
