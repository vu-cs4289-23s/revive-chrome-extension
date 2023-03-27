import React from "react";
import { useNavigate } from "react-router-dom";
import profileimg from './images/profile.jpg';


import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";

export const Profile = () => {
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
          <h1 class="text-2xl font-mono text-cyan-500 text-center">Settings</h1>
          <h2 class="text-center text-m pt-1 font-semibold text-stone-500">
              email, password, personal info
          </h2>
        </button>
        <button class="font-sans bg-stone-200 mb-3 p-1 w-full rounded-xl shadow-md">
          <h1 class="text-2xl font-mono text-cyan-500 text-center">Sizes</h1>
          <h2 class="text-center text-m pt-1 font-semibold text-stone-500">
              set your preferred sizes
          </h2>
        </button>
        <button class="font-sans bg-stone-200 mb-3 p-1 w-full rounded-xl shadow-md">
          <h1 class="text-2xl font-mono text-cyan-500 text-center">Orders</h1>
          <h2 class="text-center text-m pt-1 font-semibold text-stone-500">
              previous orders, shipping status
          </h2>
        </button>
        <button class="font-sans bg-stone-200 mb-24 p-1 w-full rounded-xl shadow-md">
          <h1 class="text-2xl font-mono text-cyan-500 text-center">Returns</h1>
          <h2 class="text-center text-m pt-1 font-semibold text-stone-500">
              initiate and edit order returns
          </h2>
        </button>
        <NavBar handleFaves = {handleFaves} handleProfile={handleProfile} handleHome={handleHome}/>
    </div>
    </div>
  );
}