const User= require('../../../../models/user');

const Message= require('../../../../models/enmessage');
const Feedback = require('../../../../models/feedback');

module.exports.get= async function(req,res){
   try{
    const alluser= await User.find();
    const allfeedback= await Feedback.find();
    const allmessage= await Message.find();


    return res.json(200,{
        Message:"Got it",
        alluser:alluser,
        fedback:allfeedback,
        allmessage:allmessage
    })
  }
  catch(err){
    return res.json(500,{
        Message:err,
        
    })
  }
}