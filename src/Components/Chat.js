import React, { useState } from 'react';

const MessageComponent = ({ messages }) => {

  const [newMessage, setNewMessage] = useState('');
  const handleSendMessage = () => {
    // Handle sending the new message (you can implement this part)
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === 'admin@gmail.com' ? 'ml-auto' : 'mr-auto'
            }`}
          >
            <div
              className={`p-4 rounded-lg ${
                message.sender === 'admin@gmail.com'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              <p>{message.content}</p>
              <small className="text-xs text-gray-500">{message.timestamp}</small>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 border-t">
        <input
          type="text"
          className="flex-grow px-4 py-2 mr-2 border rounded-lg focus:outline-none"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageComponent;
