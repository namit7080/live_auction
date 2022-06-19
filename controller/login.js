const User= require('../models/user');
const jwt= require('jsonwebtoken');
module.exports.loginrender=function(req,res){
    return res.render('login');

}
module.exports.createSession= async function(req,res){
     
    let user1= await User.findOne({username:req.body.username});

    if(user1.password!=req.body.password){
        console.log("Account is Blocked");
        return res.redirect('/');
    }
    let mytoken=jwt.sign(user1.toJSON(),'live', {expiresIn: '1h'});
     return res.render('t&c',{
        data:{
            token: mytoken.slice(20,30)
            },
        name:user1.username,
        email:user1.email,
        status:"Active",
        secret:mytoken

    }



    );
}

module.exports.destroysession= function(req,res){
  
    res.clearCookie('auctioncookie');
    req.logout();
    console.log("Cookies Clear");
    
    return res.redirect('back'); 

}

