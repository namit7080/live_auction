const express= require('express');

const router= express.Router();
const passport= require('passport');

const bid= require('../../controller/api/bidding/v1/bidding');

// for bidding 
router.post('/api',passport.checkauthentication,bid.bidstart);




module.exports=router;