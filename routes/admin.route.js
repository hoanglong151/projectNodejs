const express = require('express');
const route = express.Router();

const controllerAdmin = require('../controllers/admin.controller');

route.get('/', controllerAdmin.login);
route.get('/register', controllerAdmin.register);
route.get('/home', controllerAdmin.home);
route.get('/product/create', controllerAdmin.createProduct);


module.exports = route;