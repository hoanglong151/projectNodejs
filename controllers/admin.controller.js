const login = (req, res) => {
  res.render('admin/authentication/login')
}

const register = (req, res) => {
  res.render('admin/authentication/register');
}

const home = (req, res) => {
  res.render('admin/products/index');
}

const createProduct = (req, res) => {
  res.render('admin/products/create')
}

module.exports = {
  login,
  register,
  home,
  createProduct
}