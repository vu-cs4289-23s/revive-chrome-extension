import React from "react";
import googleimg from './images/google.png';


import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";

export const Login = () => {

    //Seok Hee, add the SSO here!!
    const handleLogin = (event) => {
        event.preventDefault();
        console.log("handleLogin called");
        let SSO_PAGE = "https://revive-auth.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=18u79hj2pun1qp370v006d7mm8&response_type=code&scope=email+openid+phone&redirect_uri=chrome-extension%3A%2F%2Fdbghifimlaocidlifhciedgacnbkkblk%2Foauth2%2Fidpresponse";
        window.open(SSO_PAGE, "_blank");

        // token logic here
    }

    return (
        <div class="bg-slate-50">
        <div class="text-cyan-500">
            <TopBar/>
            <div class="m-4">
                <h1 class="text-2xl font-mono text-cyan-500 text-center">Settings</h1>
            </div> 
            <div class="flex justify-center items-center">
                <button class="m-15 px-4 py-2 text-center bg-cyan-500 font-bold text-5xl text-white rounded-full">R</button>
            </div>
            <div class="m-5">
                <h1 class="text-l font-mono text-slate-500 text-center">signed in for a more personalized experience!</h1>
            </div> 
            <div class="flex justify-center items-center">
                <button onClick = {handleLogin} class="flex items-center justify-center mb-3 bg-transparent hover:bg-stone-400 text-cyan-700 font-semibold text-l hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">
                    <img src= {googleimg} alt="" class="items-center object-contain w-8 h-6 m-1"/>
                    <div>Sign in with Google</div>
                </button>
            </div>
            <button class="font-sans mb-3 p-1 w-full">
            <h1 class="text-l font-mono text-slate-500 text-center hover:bg-slate-100">Privacy Policy</h1>
            </button>
            <NavBar/>
        </div>
        </div>
    );
}