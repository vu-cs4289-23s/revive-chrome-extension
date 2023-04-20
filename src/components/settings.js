import React from "react";
import profileimg from './images/profile.jpg';


import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
  let navigate = useNavigate();

  const handleSignout = (event) => {
    event.preventDefault();
    navigate(`/loginsettings`);
  }

  const handlePrivacy = (event) => {
    event.preventDefault();
    navigate(`/privacy`);
  }

  return (
    <div class="bg-slate-50">
    <div class="text-cyan-500">
        <TopBar/>
        <div class="m-4">
            <h1 class="text-2xl font-mono text-cyan-500 text-center">Settings</h1>
        </div> 
        <div class="m-5">
          <img src= {profileimg} alt="" class="items-center object-contain w-full h-20"/>
        </div>       
        <div class="m-5">
            <h1 class="text-l font-mono text-slate-500 text-center">signed in as: jacquelinebruce2012@gmail.com</h1>
        </div> 
        <div class="flex items-center justify-center">
        <div class="font-sans bg-stone-200 mb-3  p-1 w-95 rounded-xl shadow-md">
          <h1 class="text-xl font-mono text-cyan-500 text-center">Preferred Sizes</h1>
          <ul class ="grid grid-cols-6 gap-5 ">
            <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold text-sm hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">XS</button>
            <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold text-sm hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">S</button>
            <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold text-sm hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">M</button>
            <button class=" bg-cyan-500 font-semibold text-sm text-white py-0 px-2 rounded-full">L</button>
            <button class=" bg-cyan-500 font-semibold text-sm text-white py-0 px-2 rounded-full">XL</button>
            <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold text-sm hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">XXL</button>

            <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold text-sm hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">2</button>
            <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold text-sm hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">4</button>
            <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold text-sm hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">6</button>
            <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold text-sm hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">8</button>
            <button class="bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold text-sm hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">10</button>
            <button class=" bg-cyan-500 font-semibold text-sm text-white py-0 px-2 rounded-full">12</button>
          </ul>
        </div>
        </div>
        <button onClick = {handlePrivacy} class="font-sans mb-3 p-1 w-full">
          <h1 class="text-l font-mono text-slate-500 text-center hover:bg-slate-100">Privacy Policy</h1>
        </button>
        <button onClick = {handleSignout} class="font-sans mb-3 p-1 w-full">
          <h1 class="text-l font-mono text-slate-500 text-center hover:bg-slate-100">Sign Out</h1>
        </button>
        <NavBar/>
    </div>
    </div>
  );
}