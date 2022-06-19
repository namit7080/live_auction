const express= require('express');

const router= express.Router();

const term= require('../controller/term');



router.get('/condition',term.term);



module.exports=router;