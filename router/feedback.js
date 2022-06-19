const express= require('express');

const router= express.Router();

const feedback= require('../controller/feedback');



router.get('/',feedback.page);
router.post('/data',feedback.form);



module.exports=router;