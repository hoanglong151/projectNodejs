const Account = require('../models/authentication.model');
const Bake = require('../models/product.model');
const login = (req, res) => {
  res.render('admin/authentication/login')
}

const register = (req, res) => {
  res.render('admin/authentication/register');
}

const logout = (req, res) => {
  res.clearCookie('userID').redirect('/');
}

const home = (req, res) => {
  res.render('admin/products/index',{ 
    name: localStorage.getItem('name')
  });
}

const createProduct = (req, res) => {
  res.render('admin/products/create')
}

const createProductPost = (req, res) => {
  const newBake = ({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.des,
    img: req.body.img
  })
  Bake.create(newBake, (err, result) => {
    if(err) return handleError(err);
    res.redirect('/admin/home');
  })
}

const registerPost = (req, res) => {
  const accountRegister = ({
    name: req.body.name,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  })
  Account.create(accountRegister, (err, result) => {
    if(err) return handleError(err);
    res.render('admin/authentication/login')
  })
}

const loginPost = (req, res) => {
  Account.findOne({name: req.body.name}, (err, account) => {
    if(err) return handleError(err);
    if(account === null || account.password !== req.body.password){
      res.render('admin/authentication/login');
      return;
    }else{
      localStorage.setItem('name', account.name);
      res.cookie('userID', account._id).redirect('/admin/home');
      return;
    }
  })
}

module.exports = {
  login,
  register,
  home,
  createProduct,
  registerPost,
  loginPost,
  createProductPost,
  logout,
}