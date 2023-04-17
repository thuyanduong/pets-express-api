const path = require('path');
const express = require('express');
const apiRoutes = require('./routes');
const logRoutes = require('./middleware/log-routes');
const addModels = require('./middleware/add-models');

const app = express();

const publicDir = path.join(__dirname, '..', 'public');
const staticServer = express.static(publicDir);
app.use(staticServer);

app.use(express.json());
app.use(logRoutes);
app.use(addModels);
app.use(apiRoutes);

module.exports = app;