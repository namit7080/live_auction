

const Product= require('../../../../models/productdetail');
const Bid= require('../../../../models/bidding');


module.exports.bidstart= async function(req,res){
   try{
    let product= await Product.findById(req.body.id);

    if(product){
        console.log("Ya");
        Bid.create({
            price:parseInt(product.phprice)+parseInt(req.body.increment),
            user:req.user._id

        },function(err,bid){
            console.log("Ya2");
            product.biding.push(bid);
            product.bidnumber= product.bidnumber+1;
            product.phprice=parseInt(product.phprice)+parseInt(req.body.increment);
            product.save();

            return res.json(200,{
                message:"Your Bid Successfully Placed 🤩"
            });
           


        })


    }
    else{
        return res.json(400,{
            message:"Your Bid not Placed 😌 "
        });
    }
 }
 catch(err){
    return res.json(500,{
        message:"Server Error Contact With Team"
    });
 }


}