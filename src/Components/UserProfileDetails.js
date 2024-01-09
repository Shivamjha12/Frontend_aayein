import React, { useState } from "react";

const UserProfileDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    alternativeNumber: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="flex flex-col bg-gradient-to-t from-black via-black to-gray-800 items-center justify-center ">
        <div className="z-10">
            <img className="w-36 h-36 rounded-full " src="https://imgs.search.brave.com/4aUsXGblAcHSLyn20zNApVhEI0QrKLzBg_HdBic5dW4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y3V0ZS1hc3Ryb25h/dXQtd29ya2luZy1s/YXB0b3AtY2FydG9v/bi12ZWN0b3ItaWNv/bi1pbGx1c3RyYXRp/b24tc2NpZW5jZS10/ZWNobm9sb2d5LWlj/b24taXNvbGF0ZWRf/MTM4Njc2LTQ2MzQu/anBnP3NpemU9NjI2/JmV4dD1qcGc" alt="" />
        </div>
      <div className="bg-gray-100 p-8 rounded shadow-md w-[1100px] h-[660px] -mt-16 ">
        <h1 className="text-2xl font-bold mb-4">More Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alternativeNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Alternative Number
            </label>
            <input
              type="tel"
              id="alternativeNumber"
              name="alternativeNumber"
              value={formData.alternativeNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-600"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-600"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileDetails;
