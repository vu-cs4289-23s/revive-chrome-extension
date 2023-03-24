import React from "react";
import { useNavigate } from "react-router-dom";
import profileimg from './images/profile.jpg';


import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";

export const Settings = () => {
    let navigate = useNavigate();

    const handleFaves = (event) => { //happens on submit
        event.preventDefault();
        navigate(`/favorites`);
    }

    const handleProfile = (event) => { //happens on submit
        event.preventDefault();
        navigate(`/profile`);
    }

    const handleHome = (event) => { //happens on submit
        event.preventDefault();
        navigate(`/`);
    }

    const handleSettings = (event) => { //happens on submit
      event.preventDefault();
      navigate(`/settings`);
  }


  return (
    <div class="bg-slate-50">
    <div class="text-cyan-500">
        <TopBar/>
        <div class="m-4">
            <h1 class="text-2xl font-mono text-cyan-500 text-center">Profile</h1>
        </div> 
        <div class="m-5">
          <img src= {profileimg} alt="" class="items-center object-contain w-full h-20"/>
        </div>       
        <button onClick = {handleSettings} class="font-sans bg-stone-200 mb-3 p-1 rounded-xl shadow-md w-full">
          <h1 class="text-2xl font-mono text-cyan-500 text-center">Change Username</h1>
        </button>
        <button class="font-sans bg-stone-200 mb-3 p-1 w-full rounded-xl shadow-md">
          <h1 class="text-2xl font-mono text-cyan-500 text-center">Change Password</h1>
        </button>
        <button class="font-sans bg-stone-200 mb-3 p-1 w-full rounded-xl shadow-md">
          <h1 class="text-2xl font-mono text-cyan-500 text-center">Set Preferred Sizes</h1>
        </button>
        <NavBar handleFaves = {handleFaves} handleProfile={handleProfile} handleHome={handleHome}/>
    </div>
    </div>
  );
}