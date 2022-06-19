
const Product= require('../models/productdetail');
const user= require('../models/user');
const Chat= require('../models/enmessage');

module.exports.chat= async function(req,res){

    const user= await Product.findById(req.query.id).populate('user');
    let text1=req.query.type;
    let text2=req.query.id;
    let final=text1.concat(text2);
    const chat= await Chat.find({chatroom:final});
 
    return res.render('chatbox',{
        user:user,
        current:req.query.type,
        message:chat
    });
}