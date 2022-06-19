class Chatengine{
   
    constructor(chatboxId,useremail,product,useremail2){
        
        this.chatBox= $(`#${chatboxId}`);
        this.userEmail=useremail;
        this.Product=product;
        this.room=useremail2;
        this.socket= io.connect('http://34.221.119.178:4000');
        console.log(this.userEmail+" "+this.Seller)
        if(this.userEmail){
             
            this.connectionHandler();
        }
    }


    connectionHandler(){
       
      
       let self= this;

        this.socket.on('connect',function(){
            // console.log("Connection Established using Socket");
              
            self.socket.emit('join_room',{
                user_email:self.userEmail,
                chatroom:self.room+self.Product
            })
             
            
            self.socket.on('user_joined',function(data){
                 console.log('a user joind ',data)
            })
        })
      


        $('#send-message').click(function(){
            
          
          
          let msg= $('#chat-message-input').val();
          document.getElementById('chat-message-input').value = "";
          
          var myDiv = document.getElementById("chat-box-message");
          myDiv.scrollTop = myDiv.scrollHeight;
         

          console.log(msg);
        
          if(msg!=''){
            
             self.socket.emit('send_message',{
                 message:msg,
                 user_email:self.userEmail,
                 chatroom:self.room+self.Product
             })
            

          }
       });
       self.socket.on('receive_message',function(data){
          

           let newMessage=$('<li>');

           let messagetype='other-message'

           if(data.user_email==self.userEmail){
               messagetype='self-message'
           }
          

           newMessage.append($('<span>',{
               'html':data.message
           }))

           if(messagetype!='self-message'){
             newMessage.append($('<sub>',{
            //    'html':data.user_email
              }))
           }

          newMessage.addClass(messagetype);
          $('#chat-box-message').append(newMessage);
          




       })       

    } 
}

