const express= require('express');

const router= express.Router();
const singup= require('../controller/singup');

router.get('/',singup.singup);


module.exports=router;