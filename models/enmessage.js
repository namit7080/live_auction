const mongoose= require('mongoose');

const livemsg= new mongoose.Schema({

    chatroom:{
        type:'string',
        require:true
    },
    email:{
         type:'string',
         require:true
     },
     message:{
        type:'string',
        require:true
    },
   




},{
    timestamps:true
})

const Livemessage= mongoose.model('Livemessage',livemsg);

module.exports=Livemessage;