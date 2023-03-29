import './App.css';

import React from "react";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/home.js";
import { Profile } from "./components/profile.js";
import { Favorites } from "./components/favorites.js";
import { Settings } from "./components/settings.js";
import { Dropdown } from "./components/dropdown.js";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/favorites" element={<Favorites/>} />
          <Route exact path="/dropdown" element={<Dropdown/>} />
          <Route exact path="/settings" element={<Settings/>} />
        </Routes>
    </Router>
  );
}

export default App;