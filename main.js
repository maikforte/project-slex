// Dependencies
const app = require('express')();

// Environment
require('dotenv').config();

// Utilities
const config = require('./config/config');

// Middlewares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// App Components
const helloWorld = require('./app/hello-world')();

// Routes
app.use(helloWorld);

app.listen(config.port, () => {
    console.log(`Listening on port: ${config.port}...`);
});
