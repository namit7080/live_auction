const express= require('express');
const passport= require('passport');
const router= express.Router();
const login= require('../controller/login');

router.get('/',login.loginrender);


router.post('/user',passport.authenticate(
    'local',
    {failureRedirect: '/'},
),login.createSession);

// router.post('./user',login.apitoken);

// To logout
router.get('/out',login.destroysession);

module.exports=router;