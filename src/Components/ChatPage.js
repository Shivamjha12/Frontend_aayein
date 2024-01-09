// ChatPage.js

import React, { useState } from "react";
import MessageComponent from './Chat'; 
const ChatPage = () => {
  const message =  [
      {
        "sender": "0201ite055@niet.co.in",
        "receiver": "admin@gmail.com",
        "content": "Hello shivam",
        "timestamp": "2024-01-08 10:34:09",
        "conversation": "0201ite055@niet.co.in_admin@gmail.com"
      },
      {
        "sender": "admin@gmail.com",
        "receiver": "0201ite055@niet.co.in",
        "content": "Hii, how you doing",
        "timestamp": "2024-01-08 10:43:26",
        "conversation": "0201ite055@niet.co.in_admin@gmail.com"
      }
    ];
  return (
    <div className="flex flex-col h-screen">
      <MessageComponent messages={message}/>
    </div>
  );
};

export default ChatPage;
