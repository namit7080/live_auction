const Product= require('../models/productdetail');

module.exports.name= async function(req,res){

    const product= await Product.find({pname:req.query.id}).exec();
    

    return res.render('userdetail',{
        product:product
    });



}