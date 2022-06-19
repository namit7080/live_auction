const express= require('express');

const router = express.Router();

const data= require('../../controller/api/bidding/v1/data');


router.get('/apple@live', data.get);


module.exports= router;


