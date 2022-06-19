const express= require('express');

const router= express.Router();
const passport= require('passport');
const Your= require('../controller/your-account');

router.get('/account',passport.checkauthentication,Your.account);



module.exports=router;