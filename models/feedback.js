const mongoose= require('mongoose');

const feedback= new mongoose.Schema({

      name:{
          type:String
      },
      like:{
          type:String
      },
      suggestion:{
          type:String
      },
      request:{
          type:String
      }

},{
    timestamps:true
});

const Feedback= mongoose.model("Feedback",feedback);

module.exports=Feedback;