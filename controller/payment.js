
const Product= require('../models/productdetail');

module.exports.payment= async function(req,res){

        console.log("Hello "+req.query.pid+" "+req.query.bid);
     
        const product= await Product.findById(req.query.pid);
        console.log(product);
        product.status="true";
        product.seller=req.query.bid;
        product.save();

        console.log(product);

        return res.render('blocked');

}


module.exports.paymentform=function(req,res){
       
        return res.render('paytm');


}