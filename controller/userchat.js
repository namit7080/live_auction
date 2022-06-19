
const Chat= require('../models/enmessage');

module.exports.chat=async function(req,res){

    const Message= await Chat.find({chatroom:req.query.uid+req.query.pid});

    return res.render('chatbox2',{
        uid:req.query.uid,
        pid:req.query.pid,
        iid:req.query.iid,
        message:Message
    })


}