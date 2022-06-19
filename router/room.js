const express= require('express');

const router= express.Router();
const passport= require('passport');

const chat= require('../controller/chat');

router.get('/room',passport.checkauthentication,chat.chat);


module.exports=router;