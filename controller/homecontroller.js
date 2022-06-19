const User= require('../models/user');



module.exports.main= function(req,res){

       // if (req.header('user-agent').indexOf('Mobile') != -1) {
       //        console.log('You are using mobile device');
       //      } else {
       //        console.log('this is probably a computer');
       //      }

       return res.render('home');


};

module.exports.create= function(req,res){
      if(req.body.password!=req.body.repassword){
             return;
       }

       User.findOne({username:req.body.username},function(err,user){

              if(!user){
                     User.findOne({email:req.body.email},function(err,newuser){
                        if(!newuser){
                             User.create({
                                  username:req.body.username,
                                  email:req.body.useremail,
                                  password:req.body.password,
                                  professional:req.body.professional

                             },function(err,userCreate){
                                    if(err){
                                           console.log("Error "+err);
                                           return;
                                    }
                                    console.log("Done");
                                   return res.redirect('back');
                             })


                        }
                        else{
                            return res.redirect('back');   
                        }



                     })
              }
              else{
                     return res.redirect('back');   
              }


            

       })


}