const express = require('express');
const route = express.Router();

const controllerHome = require('../controllers/home.controller');

route.get('/', controllerHome.index);

module.exports = route;