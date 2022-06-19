const Chat = require('../models/enmessage');

module.exports.chatSocket1= function(socketServer){
    // console.log("Here we are");
    const Server = require('socket.io');
    //It will be handling the connections
    let io = Server(socketServer, {
        // Fixing the cors issue
        cors: {
            origin: "http://localhost:8000"
        }
    })
     io.sockets.on('connection',function(socket){
         

       

         console.log(socket.id);

       // when user Disconnect
        socket.on('disconnect',function(){
            io.emit('message','A user left the Chat')
        })

        socket.on('join_room',function(data){
           
            
             socket.join(data.chatroom);
             io.in(data.chatroom).emit('user_joined',data);
        })
       
        socket.on('send_message',function(data){
            console.log(data);
            Chat.create({
                chatroom:data.chatroom,
                email:data.user_email,
                message:data.message
            })
            io.in(data.chatroom).emit('receive_message',data);
        })

    })


}