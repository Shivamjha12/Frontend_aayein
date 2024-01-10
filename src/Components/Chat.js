import React, { useState,useEffect } from 'react';

const MessageComponent = ({ messages,user,receiver,onMessageSend }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messageLoading, setMessageLoading] = useState(true);
  const production_url = 'https://backend-api-8pga.onrender.com';
  async function sendMessage(message) {
    const data = {
      "content":message
    }
    console.log(message,"|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
    const response = await fetch(`${production_url}/api/v1/send-message/${user}/${receiver}/`,{
      method: "POST",
      headers: {
           "Content-Type": "application/json"
      },
      credentials:'include',
      body: JSON.stringify(data)
      });
      const content = await response.json();    
      onMessageSend();
      console.log(content ,JSON.stringify(data)," sendMessage bolta hn biduuuuuuuuuuuuuuuuuuuuuuuuu");
      setNewMessage('');
      
  }


  const handleSendMessage = (message) => {
    // Handle sending the new message (you can implement this part)
    console.log(message,"====================================================================");
    sendMessage(message);
  };
  useEffect(() => {
    if (messages.length > 0) {
      setMessageLoading(false);
    }
  }, [messages]);

  return (
    <>
      <div className="mainMessageComponent flex flex-col h-screen">
        {messageLoading===true ? (<><p>The Chat is Loading Or Empty, Double Click on Friend Chat to load Chat and send Message to see messages</p></>):(
            <div className="flex-grow p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.sender === user ? 'ml-auto' : 'mr-auto'
                }`}
              >
                <div
                  className={`p-4 rounded-lg ${
                    message.sender === user
                      ? 'bg-gray-200'
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  <p>{message.content}</p>
                  <small className="text-xs text-white-500">{message.timestamp}</small>
                  <strong><small className="text-xs m-2 text-white-500">{message.sender}</small></strong>
                </div>
              </div>
            ))}
          </div>
        )
        }
      </div>
      <div className="ChatPageSendBox flex items-center p-4 border-t">
        <input
          type="text"
          className="flex-grow px-4 py-2 mr-2 border rounded-lg focus:outline-none"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />


        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={(e)=>{
            handleSendMessage(newMessage);
            console.log(newMessage);
            
          } }
        >
          Send
        </button>
      </div>
    </>
  );
};

export default MessageComponent;
