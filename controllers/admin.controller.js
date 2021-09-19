const md5 = require('md5');
const modelAccount = require('../models/authentication.model');
const modelBake = require('../models/product.model');
const login = (req, res) => {
  res.render('admin/authentication/login')
}

const register = (req, res) => {
  res.render('admin/authentication/register');
}

const logout = (req, res) => {
  res.clearCookie('userID').redirect('/');
}

const home = async (req, res) => {
  try{
    await modelBake.find({}, (err, bakes) =>{
      try{
        res.render('admin/products/index',{ 
          name: localStorage.getItem('name'),
          bakes
        });
      }catch(e){
        console.log(e + err)
      }
    });
  }catch(e){
    console.log(e)
  }
}

const editProduct = (req, res) => {
  modelBake.findOne({_id: req.params.id}, (err, result) =>{
    if(err) handleError(err);
    res.render('admin/products/edit',{
      result
    })
  })
}

const editProductPut = (req, res) => {
    const updateBake = {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.des,
    }
    modelBake.updateOne({_id: req.params.id}, updateBake, (err, result) =>{
      if(err) return handleError(err);
      res.redirect('/admin/home')
    })
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
  });
  modelBake.create(newBake, async (err, result) => {
    if(err) return handleError(err);
    await res.redirect('/admin/home');
  })
}

const registerPost = (req, res) => {
  const accountRegister = ({
    name: req.body.name,
    password: md5(req.body.password),
    confirmPassword: md5(req.body.confirmPassword),
  })

  if(accountRegister.password === accountRegister.confirmPassword){
    Account.create(accountRegister, (err, result) => {
      if(err) return handleError(err);
      res.render('admin/authentication/login')
      return;
    })
  }else{
    res.render('admin/authentication/register');
    return;
  }
}

const loginPost = (req, res) => {
  modelAccount.findOne({name: req.body.name}, (err, account) => {
    if(err) return handleError(err);
    if(account === null || account.password !== md5(req.body.password)){
      res.render('admin/authentication/login');
      return;
    }else{
      localStorage.setItem('name', account.name);
      res.cookie('userID', account._id).redirect('/admin/home');
      return;
    }
  })
}

const detailProduct = (req, res) => {
  modelBake.findOne({_id: req.params.id}, (err, result) => {
    if(err) return handleError(err);
    res.render('admin/products/detail', {
      result
    })
  })
}

const deleteProduct = (req, res) => {
  modelBake.deleteOne({_id: req.params.id}, (err, result) => {
    if(err) return handleError(err);
    res.redirect('back');
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
  editProduct,
  editProductPut,
  detailProduct,
  deleteProduct,
}