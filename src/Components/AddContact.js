// AddContact.js

import React, { useState } from 'react';

const AddContact = () => {
  // State for capturing contact details
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to save the contact details, e.g., send to a server or update state.
    console.log('Contact details submitted:', contact);
    // Reset the form after submission
    setContact({
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div className="container mx-auto pt-24 h-screen  bg-gradient-to-t from-black via-black to-gray-800">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 border rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Add Contact</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleInputChange}
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
