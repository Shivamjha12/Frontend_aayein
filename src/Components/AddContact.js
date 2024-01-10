// AddContact.js

import React, { useState } from 'react';

const AddContact = ({currentUser}) => {
 
  
  // Handle input changes
  const [email,setEmail]=useState('')
  const productionUrl = 'https://backend-api-8pga.onrender.com';
  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    // You can add your logic here to save the contact details, e.g., send to a server or update state.
    console.log('Contact details submitted:', currentUser," ",email);
    // Reset the form after submission
    const data = {
      "current_user":currentUser,
      "friendmail":email
    }
    const response = await fetch(`${productionUrl}/api/v1/addfriend`,{
      method: "POST",
      headers: {
           "Content-Type": "application/json"
      },
      credentials:'include',
      body: JSON.stringify(data)
      });
      const content = await response.json();
      console.log(content, JSON.stringify(data));
      setEmail('');
      if(content.message === 'Friend added successfully'){
        alert("Friend added successfully");
      } else {
        alert("Friend already added or something Wrong Happened Try Again");
      }
    
  };

  return (
    <div className="container mx-auto pt-24 h-screen  bg-gradient-to-t from-black via-black to-gray-800">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 border rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Add Contact</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
