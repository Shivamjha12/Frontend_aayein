import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const production_url = 'https://97aa285b-a2b1-4f48-95c6-3a55e1d24c0e-00-3phaaqjxkkrnz.riker.replit.dev';

  const onSubmit = async (e)=>{
    e.preventDefault();
    const signupData = {
        email,
        password
    }
    console.log(JSON.stringify(signupData));
    const response = await fetch(`${production_url}/api-user/v1/login`,{
        method: "POST",
        headers: {
             "Content-Type": "application/json"
        },
        credentials:'include',
        body: JSON.stringify(signupData)
        
    });
    const content = await response.json();
    console.log(content);
    if(content.detail==="You are not registered on the platform" || content.detail==="password is incorrect")
    {
        alert("Email or password is incorrect");
        navigate('/signin');

    }
    else
    {
    // setJwt(content.jwt)
    // console.log(jwt)
    Cookies.set('meraToken', content.jwt, { expires: 24*60*60 });
    // Cookies.set('jwt', jwt, { expires: 60 * 60 * 24 * 1, httpOnly: true });
    // console.log(content.jwt," here is the jwt-> ",jwt,"here is login page content");
    navigate('/');
    navigate(0);
    }
    
}

  return (
    <div className="flex items-center justify-center gap-24 h-screen  bg-gradient-to-b from-black via-black to-gray-800 ">
      <div>
        <div>
          <img
            className="rounded-2xl w-96"
            src="https://imgs.search.brave.com/NBHVZSlrxxSzXX76O2MDBXpHOEaZWDUw8KM4UH8st9I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y3V0ZS1yb2JvdC1o/b2xkaW5nLWNsaXBi/b2FyZC1jYXJ0b29u/LXZlY3Rvci1pY29u/LWlsbHVzdHJhdGlv/bi1zY2llbmNlLXRl/Y2hub2xvZ3ktaWNv/bi1pc29sYXRlZF8x/Mzg2NzYtNTE4NC5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
            alt="img"
          />
        </div>
      </div>
      <div className="p-8 rounded-xl shadow-md w-[500px] h-[500px]">
        <div>
          <h1 className="text-5xl font-bold text-white mb-4">Sign in</h1>
        </div>
        <div className="pt-4">
          <form onSubmit={(e)=>{onSubmit(e)}} >
            <div className="mb-4">
              <label
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
                onChange={(e)=>{setEmail(e.target.value)}}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="type your password..."
                onChange={(e)=>{setPassword(e.target.value)}}
                required
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-900 text-white font-bold py-2 px-4 w-28 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
            <p className="text-white mt-2">Need Help ?</p>
            <div className="flex gap-2">
              <p className="text-gray-500 mt-2">New to Aayein?</p>
              <p className="text-white mt-2 underline hover:cursor-pointer ">Sign up now.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
