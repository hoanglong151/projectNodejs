const express = require('express');
const route = express.Router();
const middleware = require('../middleware/accountDB.middleware');

const controllerAdmin = require('../controllers/admin.controller');
// Authentication
route.get('/', controllerAdmin.login);
route.post('/', controllerAdmin.loginPost);
route.get('/register', controllerAdmin.register);
route.post('/register', controllerAdmin.registerPost);
route.get('/logout', controllerAdmin.logout);
// View Home
route.get('/home', middleware, controllerAdmin.home);
// Create Product
route.get('/product/create', middleware, controllerAdmin.createProduct);
route.post('/product/create', middleware, controllerAdmin.createProductPost);


module.exports = route;