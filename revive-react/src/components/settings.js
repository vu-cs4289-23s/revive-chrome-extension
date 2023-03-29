import React from "react";
import profileimg from './images/profile.jpg';


import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";

export const Settings = () => {

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
        <button class="font-sans bg-stone-200 mb-3 p-1 w-full rounded-xl shadow-md">
          <h1 class="text-2xl font-mono text-cyan-500 text-center">Preferred Sizes</h1>
          <ul>
            <li class="text-l font-mono text-slate-500 text-center">XS</li>
            <li class="text-l font-mono text-slate-500 text-center">S</li>
          </ul>
        </button>
        <button class="font-sans mb-3 p-1 w-full rounded-xl">
          <h1 class="text-l font-mono text-slate-500 text-center">Sign Out</h1>
        </button>
        <NavBar/>
    </div>
    </div>
  );
}