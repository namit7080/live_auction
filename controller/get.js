
let Product= require('../models/productdetail');
module.exports.get= async function(req,res){
    let payload=await req.body.payload.trim();
   let product= await Product.find({ pname:{$regex: new RegExp('^'+payload+'.*','i')}}).exec();

    product=product.slice(0,10);
   
   
   res.send({payload: product});
}