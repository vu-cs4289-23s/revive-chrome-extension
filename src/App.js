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
          <Route exact path="/login" element={<Login userId={userId} setUserId={setUserId} />} />
          <Route exact path="/privacy" element={<Privacy/>} />
        </Routes>
    </Router>
  );
}

export default App;