import React, { useState, useEffect } from "react";

const UserProfile = ({userDataPassed}) => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    contactNumber: "123-456-7890",
    alternativeNumber: "987-654-3210",
    age: 25,
    gender: "male",
  });

  console.log(userDataPassed,"---------------------999999900000000000000000000000---------------------")
  const production_url = 'https://backend-api-8pga.onrender.com';
  
  // Simulate fetching user data from an API or database
  useEffect(() => {
    // Fetch user data logic goes here (replace with actual data fetching)
    // For now, use the initial state as the user data
    // setUserData(userDataPassed);
  }, []);

  return (
    <div className="flex gap-48 items-center justify-center h-screen bg-gradient-to-t from-black via-black to-gray-800">
        <div className="flex flex-col gap-4">
            <img className="w-48 h-48 rounded-full " src="https://imgs.search.brave.com/TuL5QAqQUG56d6sq308nJA1KaWE5C-ptvoOy2J3f1RU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y3V0ZS1hc3Ryb25h/dXQtbGFuZGluZy13/aXRoLXJvYm90LWNh/cnRvb24tdmVjdG9y/LWljb24taWxsdXN0/cmF0aW9uLXNjaWVu/Y2UtdGVjaG5vbG9n/eS1pc29sYXRlZC1m/bGF0XzEzODY3Ni02/NjA3LmpwZz9zaXpl/PTYyNiZleHQ9anBn" alt="img" />

            <img className="w-48 h-48 rounded-full " src="https://imgs.search.brave.com/EuN0a_AGyntYiJshw5pH7VjwXfGhHh0OofbU5SuQ7Ko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y3V0ZS1zaGliYS1p/bnUtZG9nLXByb2Zm/ZXNvci13aXRoLWxh/cHRvcC1jYXJ0b29u/LXZlY3Rvci1pY29u/LWlsbHVzdHJhdGlv/bi1hbmltYWwtdGVj/aG5vbG9neS1pY29u/XzEzODY3Ni01MTg4/LmpwZz9zaXplPTYy/NiZleHQ9anBn" alt="img" />

            <img className="w-48 h-48 rounded-full " src="https://imgs.search.brave.com/h5xgBNex2eL-Xtm5TuO52t3GE46Pb43pNp5fUTJB1MY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y3V0ZS1yb2JvdC1o/b2xkaW5nLXBob25l/LXdpdGgtbGFwdG9w/LWNhcnRvb24tdmVj/dG9yLWljb24taWxs/dXN0cmF0aW9uLXNj/aWVuY2UtdGVjaG5v/bG9neS1pc29sYXRl/ZF8xMzg2NzYtNDg3/MC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw" alt="img" />



        </div>
      <div className="flex flex-col justify-center  bg-gray-200 p-8 rounded-2xl shadow-md w-[780px] h-[600px]">
        <div className="flex flex-col  ">
          <div>
            <img
              className="w-32 h-32 rounded-full border-black hover:cursor-pointer"
              src="https://imgs.search.brave.com/n3BldxraNJj5Cv-jIlmKFcx_gBruqbhAwd12Ko2G-xA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y3V0ZS1zaGliYS1p/bnUtZG9nLXJvYm90/LWNhcnRvb24tdmVj/dG9yLWljb24taWxs/dXN0cmF0aW9uLWFu/aW1hbC10ZWNobm9s/b2d5LWljb24tY29u/Y2VwdC1pc29sYXRl/ZF8xMzg2NzYtNjYy/MC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
              alt="img"
            />
          </div>
          <div>
          
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold mb-4">User Profile</h1>
          <div className="flex gap-4 mb-4">
            <strong>Name:</strong>
            {userDataPassed.name}
            
          </div>
          <div className="flex gap-4 mb-4">
            <strong>Email:</strong> {userDataPassed.email}
            
          </div>
          <div className="flex gap-4 mb-4">
            <strong>Contact Number:</strong> {userDataPassed.contactNumber}
            
          </div>
          <div className="flex gap-4 mb-4">
            <strong>Alternative Number:</strong> {userDataPassed.alternativeNumber}
            
          </div>
          <div className="flex gap-4 mb-4">
            <strong>Age:</strong> {userDataPassed.age}
            
          </div>
          <div className="flex gap-4 mb-4">
            <strong>Gender:</strong> {userDataPassed.gender}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
