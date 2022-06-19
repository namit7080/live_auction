const mongoose= require('mongoose');

const multer= require('multer');
const { type } = require('os');

const path= require('path');

const Avatar_Path= path.join('/uploads/user/avatar')

const product= new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserInfo'
    },
     
    pname:{
        type:String,
        required:true
    },
    ptype:{
        type:String,
        required:true
    },
    pdescription:{
        type:String,
        required:true
    },
    pbaseprice:{
        type:Number,
        min:50,
        required:true
    },
    phprice:{
        type:Number,
        min:50,
        required:true
    },
    plastdate:{
        type:Date,
        required:true
    },
    pother:{
        type:String,
        default:"No other Information"
    },
    avatar:[{
        type:String
        
       }
    ],
    biding:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Bid'
    }],
    status:{
        type:String
    },
    seller:{
        type:String
    },
    bidnumber:{
        type:Number,
        required:true
    
    }



},{
    timestamps:true
})

let storage= multer.diskStorage({
    // where the file to be store
    destination: function(req,file,cb){
        cb(null,path.join(__dirname, '..',Avatar_Path));
            //  models+ one step back + avatar_path
    },
    // name of file 
    filename: function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now());
        // fieldname is avatar
    }


})


product.statics.avatarPath=Avatar_Path;

product.statics.uploadedAvatar= multer({
    storage:storage,
    fileFilter: function(req,file,cb){
        if(file.mimetype=="image/png"||file.mimetype=="image/jpg"||file.mimetype=="image/jpeg"){
            cb(null,true);
        }
        else{
            cb(null,false);
            return cb(new Error("Only Jpg, png file Allowed"))
        }
    }


}).array('avatar',10); 



const ProductDetail= mongoose.model('ProductDetail',product);

module.exports=ProductDetail;