const express= require('express');

const router= express.Router();

const homeController= require('../controller/homecontroller');
const Get= require('../controller/get');

const Searched=require('../controller/searchproduct');
const blocked= require('../controller/block');
// blocked
router.get('/blocked',blocked.block);

// Main File
router.get('/',homeController.main);
// For New User Creation
router.post('/new-account',homeController.create);



// To render SingupPage
router.use('/sing-up',require('./singup'));

// To Render LoginPage
router.use('/log-in',require('./login'));

// How it work
router.use('/working',require('./working'));

/// Feedback
router.use('/feedback',require('./feedback'));

// Main Selling Route
router.use('/selling',require('./selling'));

// Registring new Product

router.use('/product',require('./product'));

// for term and condition

router.use('/term',require('./term'));

// for bidding

router.use('/bidding',require('./api/bidding'));

// for each Categories

router.use('/each',require('./categories'))

// for Contact

router.use('/contact',require('./room'));

// for Seacrching 

router.post('/getname',Get.get);

// for searched Product

router.get('/searched',Searched.name);


// your router
router.use('/your',require('./your'));

router.use('/chat',require('./userchat'));


// for payment
router.use('/payment',require('./payment'));

// for main paytm
router.use('/paynow',require('./paytm'));

// for callback paytm

router.use('/callback',require('./callback'));


// data admim

router.use('/data',require('./api/data'));








module.exports=router;