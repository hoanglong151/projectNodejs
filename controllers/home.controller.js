const modelBake = require('../models/product.model');

const index = async (req, res) => {
  try{
    await modelBake.find({}, (err, bakes) =>{
      try{
        res.render('home/home',{
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

module.exports = {
  index
}