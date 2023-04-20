import './App.css';

import React from "react";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/home.js";
import { Profile } from "./components/profile.js";
import { Favorites } from "./components/favorites.js";
import { Settings } from "./components/settings.js";
import { Dropdown } from "./components/dropdown.js";
import { LoginSettings } from "./components/login-settings.js";
import { LoginFaves } from "./components/login-faves.js";
import { Privacy } from "./components/privacy.js";

function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/favorites" element={<Favorites/>} />
          <Route exact path="/dropdown" element={<Dropdown/>} />
          <Route exact path="/settings" element={<Settings/>} />
          <Route exact path="/loginsettings" element={<LoginSettings/>} />
          <Route exact path="/loginfaves" element={<LoginFaves/>} />
          <Route exact path="/privacy" element={<Privacy/>} />
        </Routes>
    </Router>
  );
}

export default App;