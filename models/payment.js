const mongoose= require('mongoose');


const pay= mongoose.Schema({
    productid:{
        type:String,
        require:true,
    },
    seller:{
        type:String,
        require:true
    },
    buyer:{
        type:String,
        require:true
    }

})

const Payment= mongoose.model('Payment',pay);

module.exports=Payment;