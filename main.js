// Dependencies
const app = require('express')();

// Utilities
const config = require('./config/config');

// App Components
const helloWorld = require('./app/hello-world')();

app.use(helloWorld);

app.listen(config.port, () => {
    console.log(`Listening on port: ${config.port}...`);
});
