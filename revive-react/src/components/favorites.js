import React from "react";
import { useNavigate } from "react-router-dom";

import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";

export const Favorites = () => {
    let navigate = useNavigate();

    const handleFaves = (event) => { //happens on submit
        event.preventDefault();
        navigate(`/favorites`);
    }

    const handleProfile = (event) => { //happens on submit
        event.preventDefault();
        navigate(`/profile`);
    }

    const handleHome = (event) => { //happens on submit
        event.preventDefault();
        navigate(`/`);
    }

  return (
    <div class="text-cyan-500">
        <TopBar/>
        <div>Favorites Paaaaaage</div>
        <NavBar handleFaves = {handleFaves} handleProfile={handleProfile} handleHome={handleHome}/>
    </div>
  );
}
