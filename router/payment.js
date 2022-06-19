const express= require('express');

const router= express.Router();

const Payment=require('../controller/payment');

router.get('/',Payment.payment);

router.get('/form',Payment.paymentform);

module.exports=router;