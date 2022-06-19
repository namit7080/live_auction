const passport= require('passport');

const JwtStragety= require('passport-jwt').Strategy;
const ExtractJWTHeader= require('passport-jwt').ExtractJwt;

const User= require('../models/user'); 

let opts={
    jwtFromRequest: ExtractJWTHeader.fromAuthHeaderAsBearerToken(),
    secretOrKey:'live'
}

passport.use( new JwtStragety(opts,function(jwtPayload,done){

    User.findById(jwtPayload._id,function(err,user){
       if(err){
           console.log("Jwt User find error");
           return;
       }
       if(user){
           return done(null,user);
       }
       else{
        return done(null,false);
       }


    })
}))


module.exports= passport;