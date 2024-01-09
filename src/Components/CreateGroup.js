// CreateGroup.js

import React, { useState } from 'react';
import AddContact from './AddContact';

const CreateGroup = () => {
  const [group, setGroup] = useState({
    groupName: '',
    members: [],
  });

  const [isAddMemberClicked, setIsAddMemberClicked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGroup({
      ...group,
      [name]: value,
    });
  };

  const handleAddMember = () => {
    setIsAddMemberClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Group details submitted:', group);
    setGroup({
      groupName: '',
      members: [],
    });
    setIsAddMemberClicked(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 border rounded shadow relative">
        <h2 className="text-2xl font-semibold mb-4">Create Group</h2>
        <div className="mb-4">
          <label htmlFor="groupName" className="block text-gray-600 text-sm font-semibold mb-2">
            Group Name
          </label>
          <input
            type="text"
            id="groupName"
            name="groupName"
            value={group.groupName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/* Conditionally render AddContact component with arrow emoji when "Add Member" is clicked */}
        {isAddMemberClicked && (
          <div className="absolute right-0 top-0 p-4 bg-white border-l border-t border-gray-300">
            <span
              role="button"
              onClick={() => setIsAddMemberClicked(false)}
              className="text-gray-500 cursor-pointer text-lg absolute top-2 right-2"
            >
              &#8592; {/* Left arrow emoji */}
            </span>
            <AddContact />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Members</label>
          <button
            type="button"
            onClick={handleAddMember}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Add Member
          </button>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
