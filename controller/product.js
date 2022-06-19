const Product= require('../models/productdetail');

const Payment = require('../models/payment');
module.exports.product= function(req,res){
    
     Product.uploadedAvatar(req,res,function(err){
        if(err){
            console.log("Error Multer "+err);
        }
        console.log("Here Working with multiple file ");
        console.log(req.files.length);
        Product.create({
            user:req.user._id,
            pname:req.body.pname,
            ptype:req.body.ptype,
            pdescription:req.body.pdescription,
            pbaseprice:req.body.pbaseprice,
            plastdate:req.body.pdate,
            pother:req.body.pother,
            phprice:req.body.pbaseprice,
            bidnumber:1
            // avatar:Product.avatarPath+'/'+req.file.filename
        },function(err,product){
            if(err){
                 console.log("Error While Registring "+err);
                 
            }
            var files = [];
            var fileKeys = Object.keys(req.files);
             fileKeys.forEach(function(key) {
                files.push(req.files[key]);
                
            });
           
            var a=0;
             for(i of files){
                 product.avatar[a]=Product.avatarPath+'/'+req.files[a].filename;
                 a++;

                
               
                
             }
             product.save();

            console.log("Done ");
            return res.redirect('/');
        })
    })
}


module.exports.findproduct= async function(req,res){
  
    let eachproduct=await Product.findById(req.query.id);
    let payment= await Payment.find({productid:req.query.id})
    
    if(eachproduct){
        return res.render('eachproduct',{
            product:eachproduct,
            pay:payment
        })
    }
    else{
        return res.send("<h1> Page Not found </h1>")
    }
    


}