const mongoose = require('mongoose');

async function connect(req, res, next) {
  try{
    await mongoose.connect('mongodb://localhost:27017/bake_dev');
    console.log('OK');
    next()
  }catch(e){
    console.log(e.message)
  }
}

module.exports = connect;