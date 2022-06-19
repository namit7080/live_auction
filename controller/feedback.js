const Feedback = require('../models/feedback');




module.exports.form= async function(req,res){
     
  const feedback= await   Feedback.create({
        name:req.body.name,
        like:req.body.like,
        suggestion:req.body.suggestion,
        request:req.body.request
    },);

    return res.redirect('back');

}

module.exports.page= function(req,res){
    
     return res.render('feedback');

}




