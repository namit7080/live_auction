
const Product= require('../models/productdetail');
const Userl= require('../models/user');


module.exports.account= async function(req,res){

     const User= await Userl.findById(req.user._id);
     
    const Yourproduct= await Product.find({user:req.user._id}).
    populate({
        path:'biding',
        populate:{
            path:'user'
        },
        options: { sort: { 'createdAt': -1} }
        
    });


     console.log(Yourproduct+" "+req.user._id);
    return res.render('yourproduct',{
        Product:Yourproduct,
        You:User
    });


}