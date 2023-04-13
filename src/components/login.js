/*global chrome*/

import React, { useState, useEffect } from "react";
import googleimg from './images/google.png';

import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";

export const Login = () => {

    const [accessToken, setAccessToken] = useState("");
    const [userId, setUserId] = useState("");

    // grab the access token from Chrome storage
    useEffect(() => {
        chrome.storage.local.get("accessToken", function (data) {
            console.log("access token from Chrome storage [login.js]: ", data.accessToken);
            setAccessToken(data.accessToken);
        });
    }, []);

    // fetch the userid from Cognito using the access token
    useEffect(() => {
        if (accessToken) {
            fetch("https://revive-auth.auth.us-east-1.amazoncognito.com/oauth2/userInfo", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log(response);
                    throw new Error("Error obtaining user information");
                }
            }).then(function (data) {
                console.log(data);
                const userId = data.username;
                // const email = data.email;
                setUserId(userId);
                // console.log("User ID: ", userId);
            }).catch(function (error) {
                console.error(error);
            });
        }
      }, [accessToken]);    


    const handleLogin = (event) => {
        event.preventDefault();
        console.log("handleLogin called");
      
        let SSO_PAGE = "https://revive-auth.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=18u79hj2pun1qp370v006d7mm8&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fexample.com%2Foauth2%2Fidpresponse";
        window.open(SSO_PAGE, "_blank");
    };

    const handleLogout = (event) => {
        event.preventDefault();
        console.log("handleLogout called");
        setUserId("");
        // remove the access token from Chrome storage and reload the page to clear the state
        chrome.storage.local.remove("accessToken", function () {
            console.log("Access token removed from Chrome storage [login.js]");
            window.location.reload();
        });
    };

    return (
        <div class="bg-slate-50">
          <div class="text-cyan-500">
            <TopBar />
            <div class="m-4">
              <h1 class="text-2xl font-mono text-cyan-500 text-center">Settings</h1>
            </div>
            <div class="flex justify-center items-center">
              <button class="m-15 px-4 py-2 text-center bg-cyan-500 font-bold text-5xl text-white rounded-full">
                R
              </button>
            </div>
            {userId ? (
              <div>
                <div class="m-5">
                  <h1 class="text-l font-mono text-slate-500 text-center">
                    Welcome, {userId}!
                  </h1>
                </div>
                <div class="flex justify-center items-center">
                  <button onClick={handleLogout} class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div class="m-5">
                  <h1 class="text-l font-mono text-slate-500 text-center">
                    Sign in for a more personalized experience!
                  </h1>
                </div>
                <div class="flex justify-center items-center">
                  <button onClick={handleLogin} class="flex items-center justify-center mb-3 bg-transparent hover:bg-stone-400 text-cyan-700 font-semibold text-l hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">
                    <img src={googleimg} alt="" class="items-center object-contain w-8 h-6 m-1" />
                    <div>Sign in with Google</div>
                  </button>
                </div>
              </div>
            )}
            <button class="font-sans mb-3 p-1 w-full">
              <h1 class="text-l font-mono text-slate-500 text-center hover:bg-slate-100">
                Privacy Policy
              </h1>
            </button>
            <NavBar />
          </div>
        </div>
      );      
}