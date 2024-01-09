import React,{useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import coin from "../Assets/icons/coin.png";
import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';
const Header = ({user}) => {
  const [coin,setCoin]=useState(null);
  const navigate = useNavigate();
    const production_url = 'https://97aa285b-a2b1-4f48-95c6-3a55e1d24c0e-00-3phaaqjxkkrnz.riker.replit.dev';




    async function getCoins(){
      const response = await fetch(`${production_url}/api/v1/getcoins/${user}`,{
        // mode:'no-cors',
        headers:{'Content-Type':'application/json'},
        credentials:'include',
        });
        const content = await response.json();
        setCoin(content);
        console.log("coinssssssssssss",content);
    }




    async function handleLogout(e){
      e.preventDefault();
      const response = await fetch(`${production_url}/api-user/v1/logout`,{
        method: "POST",
        headers: {
             "Content-Type": "application/json"
        },
        credentials:'include',
        body: JSON.stringify("")
        });
        Cookies.remove('meraToken');
        navigate('signin/');
        console.log(response);
        navigate(0);

    }

    useEffect(() => {
      console.log("re render the navigation");
      getCoins();
      console.log("----------------------------------user in head------------------------",user)
    },[handleLogout])


  return (
    <div className="flex justify-center items-center p-2">
      <div className="flex gap-16 justify-center items-center  h-[60px] w-full  ">
        <div className="flex justify-center items-center">
          <img
            className="w-24 h-28"
            src="https://imgs.search.brave.com/Ox2-khpouGK7vrf3sAzd1JpNW7AqLq9GX28NJ9olQDs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zMDMxNTEv/c2xhY2stbG9nby5z/dmc.svg"
            alt=""
          />
        </div>


        {user!=="notUser"?(<>
          <div>
          <ul className="middleHeader0 flex gap-16 font-semibold text-lg cursor-pointer">
          <li onClick={(e)=>{navigate('/')}} >Home</li>
            <li onClick={(e)=>{navigate('/profile')}} >Profile</li>
            <li onClick={(e)=>{navigate('/addcontact')}} >Add Contacts</li>
            <li onClick={(e)=>{navigate('/chat')}} >Chat</li>
            <li onClick={(e)=>{navigate('/creategroup')}} >Groups</li>
          </ul>
        </div>

        <div className="flex gap-6">
          <div className="font-semibold">
            <button className="border-2 p-2 bg-white text-black" onClick={(e) =>{
                handleLogout(e);
                }} >Log Out</button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img className="w-14 h-14 rounded-full" src={coin} alt="coinimage" />
          <p className="text-2xl font-bold" >0</p>
        </div>
        
        </>):(
        <>
        <div>
          <ul className="middleHeader flex gap-16 font-semibold text-lg cursor-pointer">
            <li onClick={(e)=>{navigate('/')}} >Home</li>
          </ul>
        </div>

        <div className="flex gap-8">
          <div className="font-semibold">
            <button onClick={(e)=>{navigate('/signup')}} className="border-2 p-2">Sign Up</button>
          </div>
          <div className="font-semibold">
            <button className="border-2 p-2 bg-white text-black" onClick={(e)=>{navigate('/signin')}} >Sign In</button>
          </div>
        </div>
        </>
        ) }


      </div>
    </div>
  );
};

export default Header;
