const Product= require('../models/productdetail');

module.exports.categories= async function(req,res){

    const product= await Product.find({ptype:req.query.id}).exec();
    

    return res.render('userdetail',{
        product:product
    });



}