const userdetail= require('../models/user')

const product= require('../models/productdetail');

module.exports.mainpage= async function(req,res){
      let p= await  product.find({}).sort({'bidnumber':-1})
      console.log("Lenght of P is " +p.length)
     return res.render('selling',{
            allproduct:p
      });

}
