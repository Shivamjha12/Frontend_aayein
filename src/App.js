
import './App.css';
import AddContact from './Components/AddContact';
import ChatPage from './Components/ChatPage';
import CreateGroup from './Components/CreateGroup';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UserProfile from './Components/UserProfile';
import UserProfileDetails from './Components/UserProfileDetails';
import Header from "./Components/Header";
import {useNavigate} from "react-router-dom";
import { Route, Routes,Navigate,Redirect  } from "react-router-dom";
import React,{ useState,useEffect } from "react";
import Cookies from 'js-cookie';
import loader from "./Assets/loader.gif";
function App() {
  
  const production_url = 'https://backend-api-8pga.onrender.com';
  const [user,setUser] = useState(null);
  const navigate = useNavigate();
  const [meraToken,setMeratoken] = useState('None');
  const [userProfile,setUserProfile] = useState(null);

  useEffect(()=>{
    (
        async () => {
            // Cookies.set('name', 'Shivam Jha', { expires: 7 });
            const token = Cookies.get('meraToken');
            // console.log(token);
            setMeratoken(token);
            // const name = Cookies.get('name');
            // console.log(name,"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX----------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            // Cookies.remove('name');
            // const fname = Cookies.get('name');
            // console.log(name,"second","XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX----------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            const response = await fetch(`${production_url}/api-user/v1/user/${meraToken}`,{
            // mode:'no-cors',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
            });
            const content = await response.json();
            // console.log(content.detail);
            if(content.email){
              await setUser(content.email);
            }
            else{
              setUser('notUser');
            }
            // console.log(user, "here we checking the data is set in user or not");
            const userProfile = await fetch(`${production_url}/api-user/v1/getUser/${user}`,{
              // mode:'no-cors',
              headers:{'Content-Type':'application/json'},
              credentials:'include',
              });
              const Usercontent = await userProfile.json();
              setUserProfile(Usercontent);
              console.log(Usercontent,"user profile");
        }
    )();
},[user,meraToken]);

if(user==null){
  return <div className="loader-container">
    <img src={loader} alt="Loading" className="loader-image" />
  </div>
}
  return (
    <>
    <Header user={user}/>
    <div>
    <Routes>
    <Route path="/" element={user==='notUser'?(<Login/>):(<LandingPage user={user}/>)}/>
    <Route path="/signin" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/profile" element={userProfile===null?(<UserProfile userDataPassed={userProfile}/>):(<UserProfileDetails/>)}/>
    <Route path="/addcontact" element={<AddContact currentUser={user}/>}/>
    <Route path="/creategroup" element={<CreateGroup/>}/>
    <Route path="/chat" element={<ChatPage user={user} />}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
