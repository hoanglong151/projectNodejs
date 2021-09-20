const express = require('express');
const route = express.Router();
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, '..', 'public', 'uploads')});
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
route.post('/product/create', middleware, upload.single('image'), controllerAdmin.createProductPost);
// Edit Product
route.get('/product/edit/:id', middleware, controllerAdmin.editProduct);
route.put('/product/edit/:id', middleware, upload.single('image'), controllerAdmin.editProductPut);
// Detail Product
route.get('/product/detail/:id', middleware, controllerAdmin.detailProduct);
// Delete Product
route.delete('/product/delete/:id', middleware, controllerAdmin.deleteProduct);


module.exports = route;