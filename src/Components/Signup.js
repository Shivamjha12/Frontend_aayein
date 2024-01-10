import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword]= useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const production_url = 'https://backend-api-8pga.onrender.com';
  const onSubmit = async (e)=>{
    e.preventDefault();
    if(password=== confirmPassword){
          const signupData = {
              name,
              email,
              password
          }
          console.log(JSON.stringify(signupData));
          const response = await fetch(`${production_url}/api-user/v1/register`,{
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(signupData)
              
          });
          const content = await response.json();
          console.log(content);
          alert("Successfully Registered You Can Login Now");
          navigate('/signin');
          
      }
    else{
        alert("Password and confirm Password field value is diffrent")
    }
  }

  return (
    <div className="flex items-center justify-center gap-24 h-screen  bg-gradient-to-t from-black via-black to-gray-800 ">
      <div>
        <div>
          <img
            className="rounded-2xl w-96"
            src="https://imgs.search.brave.com/nQZEEYq6se_WhtLyOFuDULmyBfSsZ_XTAUY7mc5b99I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y3V0ZS1hc3Ryb25h/dXQtb3BlcmF0aW5n/LWxhcHRvcC13aXRo/LXJvYm90LWNhcnRv/b24tdmVjdG9yLWlj/b24taWxsdXN0cmF0/aW9uLXNjaWVuY2Ut/dGVjaG5vbG9neS1p/Y29uXzEzODY3Ni02/NjA5LmpwZz9zaXpl/PTYyNiZleHQ9anBn"
            alt="img"
          />
        </div>
      </div>
      <div className="p-8 rounded-xl shadow-md w-[500px] h-[500px]">
        <div>
          <h1 className="text-5xl font-bold text-white mb-4">Sign Up</h1>
        </div>
        <div className="pt-4">
          <form onSubmit={(e)=>{onSubmit(e)}} >
          <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="type your name..."
                required
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border-black rounded-md"
                placeholder="type your email..."
                required
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
                Create password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="create password..."
                required
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="confirm password..."
                required
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-900 text-white font-bold py-2 px-4 w-28 rounded-md hover:bg-blue-600"
            >
              Signup
            </button>
            <p className="text-white mt-2">Need Help ?</p>
            <div className="flex gap-2">
              <p className="text-gray-500 mt-2">Already user to Aayein?</p>
              <p className="text-white mt-2 underline hover:cursor-pointer ">
                Sign in.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
