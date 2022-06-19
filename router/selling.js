const express= require('express');
const router= express.Router();

const Selling= require('../controller/selling');

router.get('/',Selling.mainpage);


module.exports= router;