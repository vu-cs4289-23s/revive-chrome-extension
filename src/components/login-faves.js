import React from "react";
import googleimg from './images/google.png';


import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";
import { useNavigate } from "react-router-dom";


export const LoginFaves = () => {
    let navigate = useNavigate();

    //Seok Hee, add the SSO here!!

    let user = "";
    const handleLogin = (event) => {
        event.preventDefault();

        //possibly a POST:
        // let res = await fetch("/v1/session", {
        //     body: JSON.stringify({
        //       username,
        //       password,
        //     }),
        //     method: "POST",
        //     credentials: "include",
        //     headers: {
        //       "content-type": "application/json",
        //     },
        //   });
        //   const data = await res.json();
        //   if (res.ok) {
        //     props.logIn(data.username);
        //     navigate(`/profile/${data.username}`);
        //   } else {
        //     setError(`Error: ${data.error}`);
        //   }

        user = "jacqueline";
        console.log(user);

        //redirect 
        navigate(`/favorites`);
    }

    const handlePrivacy = (event) => {
        event.preventDefault();
        navigate(`/privacy`);
    }

    return (
        <div class="bg-slate-50">
        <div class="text-cyan-500">
            <TopBar/>
            <div class="flex justify-center items-center mt-5">
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
            <button onClick = {handlePrivacy} class="font-sans mb-3 p-1 w-full">
                <h1 class="text-l font-mono text-slate-500 text-center hover:bg-slate-100">Privacy Policy</h1>
            </button>
            <NavBar user={user}/>
        </div>
        </div>
    );
}