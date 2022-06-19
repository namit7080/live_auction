const mongoose= require('mongoose');

const bid= new mongoose.Schema({

    price:{
        type:Number,
        min:100,
        required :true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserInfo'
    }

   


},{
    timestamps:true
})

const Bid= mongoose.model('Bid',bid);

module.exports=Bid;


