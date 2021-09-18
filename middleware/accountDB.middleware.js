const checkCookie = (req, res, next) => {
  if(req.cookies.userID){
    next();
    return;
  }else{
    res.render('admin/authentication/login');
  }
} 

module.exports = checkCookie;
