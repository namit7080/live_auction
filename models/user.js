const mongoose= require('mongoose');

const user_info= new mongoose.Schema({
      username:{
          type:'string',
          required:true,
          unique:true
      },
      email:{
          type:'string',
          required:true,
          unique:true
      },
      professional:{
        type:'string',
        required:true
      },
      password:{
         type:'string',
         required:true
      }


},{
    timestamps:true
});

const UserInfo= mongoose.model('UserInfo',user_info);

module.exports=UserInfo;