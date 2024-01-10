// ChatPage.js

import React, { useState } from "react";
import MessageComponent from './Chat';
import UserCard from "./UserCard"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
const ChatPage = ({user}) => {
  const production_url = 'https://backend-api-8pga.onrender.com';
  const [userFriends, setUserFriends] = useState([]);
  const [friendMessage, setFriendMessage] = useState([]);
  const [currentFriend,setCurrentFriend] = useState('');
  const [loading, setLoading] = useState(true);
  const [messagesloading, setMessagesLoading] = useState(true);



  async function getFriends() {
    const response = await fetch(`${production_url}/api/v1/getfriends/${user}`,{
      headers: {
           "Content-Type": "application/json"
      },
      credentials:'include',
      // body: JSON.stringify(data)
      });
      const content = await response.json();
      setUserFriends(content.friends);
      setLoading(false);
      console.log(content ,"FriendList bolta hn biduuuuuuuuuuuuuuuuuuuuuuuuu");
      // userFriends.map((index,friend) => {
      //   console.log(index,friend);
      // });
      console.log(userFriends,"userFriends");
  }


  async function getMessages() {

    
    const response = await fetch(`${production_url}/api/v1/get-chat-history/${user}/${currentFriend}/`,{
      headers: {
           "Content-Type": "application/json"
      },
      credentials:'include',
      // body: JSON.stringify(data)
      });
      const content = await response.json();
      setFriendMessage(content.messages);
      setMessagesLoading(false);
      console.log(content ,"FriendList bolta hn biduuuuuuuuuuuuuuuuuuuuuuuuu");
      // userFriends.map((index,friend) => {
      //   console.log(index,friend);
      // });
      console.log(userFriends,"userFriends");
      console.log(friendMessage,"friendMessage",currentFriend);
  }
  useEffect(() => {
    getFriends(); 
  }, [user]);
  // const message =  [
  //     {
  //       "sender": "0201ite055@niet.co.in",
  //       "receiver": "admin@gmail.com",
  //       "content": "Hello shivam",
  //       "timestamp": "2024-01-08 10:34:09",
  //       "conversation": "0201ite055@niet.co.in_admin@gmail.com"
  //     },
  //     {
  //       "sender": "admin@gmail.com",
  //       "receiver": "0201ite055@niet.co.in",
  //       "content": "Hii, how you doing",
  //       "timestamp": "2024-01-08 10:43:26",
  //       "conversation": "0201ite055@niet.co.in_admin@gmail.com"
  //     },
  //     {
  //       "sender": "0201ite055@niet.co.in",
  //       "receiver": "admin@gmail.com",
  //       "content": "Hello shivam",
  //       "timestamp": "2024-01-08 10:34:09",
  //       "conversation": "0201ite055@niet.co.in_admin@gmail.com"
  //     },
  //     {
  //       "sender": "admin@gmail.com",
  //       "receiver": "0201ite055@niet.co.in",
  //       "content": "Hii, how you doing",
  //       "timestamp": "2024-01-08 10:43:26",
  //       "conversation": "0201ite055@niet.co.in_admin@gmail.com"
  //     },
  //     {
  //       "sender": "0201ite055@niet.co.in",
  //       "receiver": "admin@gmail.com",
  //       "content": "Hello shivam",
  //       "timestamp": "2024-01-08 10:34:09",
  //       "conversation": "0201ite055@niet.co.in_admin@gmail.com"
  //     },
  //     {
  //       "sender": "admin@gmail.com",
  //       "receiver": "0201ite055@niet.co.in",
  //       "content": "Hii, how you doing",
  //       "timestamp": "2024-01-08 10:43:26",
  //       "conversation": "0201ite055@niet.co.in_admin@gmail.com"
  //     },
  //     {
  //       "sender": "0201ite055@niet.co.in",
  //       "receiver": "admin@gmail.com",
  //       "content": "Hello shivam",
  //       "timestamp": "2024-01-08 10:34:09",
  //       "conversation": "0201ite055@niet.co.in_admin@gmail.com"
  //     },
  //     {
  //       "sender": "admin@gmail.com",
  //       "receiver": "0201ite055@niet.co.in",
  //       "content": "Hii, how you doing",
  //       "timestamp": "2024-01-08 10:43:26",
  //       "conversation": "0201ite055@niet.co.in_admin@gmail.com"
  //     },
  //   ];
  const userDetails = {
    "name": "Shivam",
    "image": "https://www.w3schools.com/howto/img_avatar.png",
    "email": "abcd@gmail.com"
  }
  return (
    <div className="chatPageMain">
      <div className="chatPageFriendList">
          <ul>
          {loading ? (
            <p>Loading friends...</p>
          ) : (
            userFriends.map((friend, index) => (
              <li key={index} onClick={ () =>{
                console.log("clicked");
                setCurrentFriend(friend.email);
                getMessages();
                // console.log(currentFriend," - ",user);
              }
            } ><UserCard userDetails={friend} /></li>
            ))
          )}
          </ul>
      </div>
    <div className="messageContent">
      <MessageComponent messages={friendMessage} user={user} receiver={currentFriend} onMessageSend={getMessages}/>
    </div>
    </div>
  );
};

export default ChatPage;
