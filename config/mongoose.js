const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/auction');
const db= mongoose.connection;

db.on('error',console.error.bind(console,'Error Connecting to Database'));

db.once('open',function(){
     console.log('Connect to database');
});

module.exports=db;