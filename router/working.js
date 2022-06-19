const express= require('express');

const router= express.Router();

const Working= require('../controller/working');

router.get('/',Working.working);


module.exports=router;