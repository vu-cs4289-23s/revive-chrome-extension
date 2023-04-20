/*global chrome*/

import React, { useState, useEffect } from "react";
import googleimg from './images/google.png';
import { useNavigate } from "react-router-dom";

import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";

export const Login = () => {
  let navigate = useNavigate();


    const [accessToken, setAccessToken] = useState("");
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [userPicture, setUserPicture] = useState("");

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
                const userName = data.given_name;
                const userPicture = data.picture;
                // const email = data.email;
                setUserId(userId);
                setUserName(userName);
                setUserPicture(userPicture);
                // console.log("User ID: ", userId);
            }).catch(function (error) {
                console.error(error);
            });
        }
      }, [accessToken]);    


    const handleLogin = (event) => {
        event.preventDefault();
        console.log("handleLogin called");
      
        let SSO_PAGE = "https://revive-auth.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=18u79hj2pun1qp370v006d7mm8&response_type=code&scope=email+openid+phone+profile&redirect_uri=https%3A%2F%2Fexample.com%2Foauth2%2Fidpresponse";
        window.open(SSO_PAGE, "_blank");
    };

    const handlePrivacy = (event) => {
      event.preventDefault();
      console.log("handlePrivacy called");
      navigate('/privacy');
    };

    const handleLogout = (event) => {
        event.preventDefault();
        console.log("handleLogout called");
        setUserId("");
        setUserName("");
        setUserPicture("");
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
              <h1 class="text-2xl mb-8 font-mono text-cyan-500 text-center">
              Settings</h1>
            </div>
            <div class="flex justify-center items-center mb-8">
              {userPicture ? (
                <img src={userPicture} alt="Profile Picture" class="w-20 h-20 rounded-full" />
              ) : (
                <button class="m-15 px-4 py-2 text-center bg-cyan-500 font-bold text-5xl text-white rounded-full">
                  R
                </button>
              )}
            </div>
            {userId ? (
              <div>
                <div class="m-5">
                  <h1 class="text-xl font-mono mb-3 text-cyan-700 text-center">
                    Welcome, {userName}!
                  </h1>
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
                <div class="flex justify-center mb-3 mt-3 items-center">
                  <button onClick={handleLogout} class="bg-transparent hover:bg-red-500 mb-3 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div class="m-5">
                  <h1 class="text-l font-mono mb-8  text-slate-500 text-center">
                    Sign in for a more personalized experience!
                  </h1>
                </div>
                <div class="flex justify-center items-center mb-8">
                  <button onClick={handleLogin} class="flex items-center justify-center bg-transparent hover:bg-stone-400 text-cyan-700 font-semibold text-l hover:text-white py-0 px-2 border border-cyan-500 hover:border-transparent rounded-full">
                    <img src={googleimg} alt="" class="items-center object-contain w-8 h-6 m-1" />
                    <div>Sign in with Google</div>
                  </button>
                </div>
              </div>
            )}
            <button onClick={handlePrivacy} class="font-sans mb-3 p-1 w-full">
              <h1 class="text-l mb-8 font-mono text-slate-500 text-center hover:bg-slate-100">
                Privacy Policy
              </h1>
            </button>
            <NavBar />
          </div>
        </div>
      );      
}