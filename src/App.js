/*global chrome*/

import './App.css';

import React, { useState, useEffect } from "react";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/home.js";
import { Profile } from "./components/profile.js";
import { Favorites } from "./components/favorites.js";
import { Settings } from "./components/settings.js";
import { Dropdown } from "./components/dropdown.js";
import { Login } from "./components/login.js";
import { Privacy } from "./components/privacy.js";

function App() {
  const [userId, setUserId] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [userName, setUserName] = useState("");
  const [userPicture, setUserPicture] = useState("");

  useEffect(() => {
      // grab the access token from Chrome storage
      chrome.storage.local.get("accessToken", function (data) {
          console.log("access token from Chrome storage [login.js]: ", data.accessToken);
          setAccessToken(data.accessToken);
      });

      // get user information from the access token
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

  // TODO - remove this
  useEffect(() => {
    console.log("userId: ", userId)
  }, [userId]);

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home userId={userId}/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/favorites" element={<Favorites userId={userId}/>} />
          <Route exact path="/dropdown" element={<Dropdown/>} />
          <Route exact path="/settings" element={<Settings/>} />
          <Route exact path="/login" element={<Login userId={userId} setUserId={setUserId} 
              userName={userName} setUserName={setUserName} userPicture={userPicture} setUserPicture={setUserPicture} />} />
          <Route exact path="/privacy" element={<Privacy/>} />
        </Routes>
    </Router>
  );
}

export default App;