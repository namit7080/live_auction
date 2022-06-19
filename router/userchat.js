const express= require('express');
const passport= require('passport');
const router= express.Router();

const chat = require('../controller/userchat');
router.get('/user',passport.checkauthentication,chat.chat);


module.exports=router;