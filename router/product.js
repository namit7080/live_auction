const express= require('express');
const passport= require('passport');
const router= express.Router();

const product= require('../controller/product');


router.post('/create',passport.checkauthentication,product.product);

router.get('/detail',product.findproduct);

module.exports=router;