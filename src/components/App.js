import React from "react";
import "./../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import {setName,setEmail} from "../app/userInfoSlice";


const App = () => {
  const dispatach = useDispatch();
  const { name, email } = useSelector((state) => state.userInfo);

  const handleChamgeName = (e)=>{
   dispatach(setName(e.target.value)) 
  };

  const handleChamgeEmail = (e)=>{
    dispatach(setEmail(e.target.value))
  };

  return <div className="output">
    <h1>User Information</h1>

    <div>
      <input type="text" value={name} placeholder="Enter Name" onChange={handleChamgeName} />
      <input type="email" value={email} placeholder="Enter Email" onChange={handleChamgeEmail} />
    </div>

    <div>
      <h3>Current Value in store</h3>
      <p>Name - {name} </p>
      <p>email - {email} </p>
    </div>
  </div>;
};

export default App;
