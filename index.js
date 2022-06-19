const express= require('express');
const port=8000;
const app= express();

// Path function
const path=require('path');

// import ejs layout
const ejslayout= require('express-ejs-layouts');

//Import session
const session= require('express-session');

// Import Passport
const passport= require('passport');

// Connect MongoDb
const db= require('./config/mongoose');

// Import Connect-Mongo to connect the session and and mongoDB
const MongoStore= require('connect-mongo')(session);

// Passport-local
const passportLocal= require('./config/passport-local');

// Passport Jwt
const passportJwt= require('./config/passport-jwt-stragety');

// Cors Setting
app.use(require('cors')())

app.use(express.json());




// ChatBox
const chatserver= require('http').Server(app);
const chatSocket= require('./config/chat_socket').chatSocket1(chatserver);
chatserver.listen(4000);
console.log("Chat Socket is running");


// set engine ejs in form of key and value
app.set('view engine','ejs');

// For Views Folder
app.set('views',path.join(__dirname,'views'));


// Set middleware
app.use(express.urlencoded({extended:false}));

// Adding Static Files for desing
app.use(express.static('asset'));

// use express ejs
app.use(ejslayout);



// Use Session in App or Express
app.use(session({
   name:'auctioncookie',
   secret:'auctioner',
   saveUninitialized:false,
   resave:'false',
   cookie:{
    maxAge:(1000*60*20)
   },
   store: new MongoStore({
    mongooseConnection :db,
    autoRemove:'disabled'
    
  },function(err){
      console.log("Error");
    }
   )



}))
app.use(passport.initialize());
app.use(passport.session());

// Set Authentication so that we use local in EJS
app.use(passport.setAuthentication);

// Uploads
app.use('/uploads', express.static(__dirname+'/uploads'));

// For Main Url 
app.use('/',require('./router'));



app.listen(port,function(err){
    if(err){
       console.log(err); return;
    }
    console.log(`server is running on port :${port}`);
 
 });