import React, { useState } from "react";
import thredupcoat from './images/brown-coat-thredup.jpg';
import poshmarkcoat from './images/brown-coat-poshmark.jpg';
import { useNavigate } from "react-router-dom";

import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";
import {ItemBox} from "./itembox.js";
import {Svg1} from "./itembox.js";
import {Svg2} from "./itembox.js";

export const Home = () => {
    let navigate = useNavigate();

    //navbar
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

    //view button
    const handleView = (event) => { //happens on submit
        event.preventDefault();
        window.open('https://www.thredup.com/product/women-linen-elie-tahari-colored-trenchcoat/137818048?query_id=741168996376502272&result_id=741169000595898368&suggestion_id=741168996426833924&sizing_id=579%2C833%2C842%2C10812%2C10829%2C10832%2C10841%2C20812%2C20813%2C20822%2C20829%2C20832%2C20841%2C20926', '_blank');
    }

    const handleViewPosh = (event) => { //happens on submit
        event.preventDefault();
        window.open('https://poshmark.com/listing/Banana-Republic-Suede-car-coat-638cbde44bd760d5e62616dd', '_blank');
    }

    //data
    let thredname = "J. Crew Trenchcoat";
    let poshname = "Banana Republic Coat";

    let thredprice = "$30.79";
    let poshprice = "$90.00";
    let ogprice = "$99.00";

    let thredsize = "L";
    let poshsize = "XLP";

    let thredplatform = "ThredUp";
    let poshplatform = "Poshmark";

    //heart
    const [heart1, setHeart1] = useState(<Svg1 />);

    const changeHeart = () => {
        if (heart1.type === Svg1) {
            setHeart1(<Svg2 />);
        } else {
            setHeart1(<Svg1 />);
        }
    }

    const [heart2, setHeart2] = useState(<Svg1 />);

    const changeHeart2 = () => {
        if (heart2.type === Svg1) {
            setHeart2(<Svg2 />);
        } else {
            setHeart2(<Svg1 />);
        }
    }

  return (
    <div class="bg-slate-50">
        <TopBar/>
        <ItemBox coat = {thredupcoat} name = {thredname} price = {thredprice} ogprice = {ogprice} size = {thredsize} platform = {thredplatform} handleView = {handleView} changeHeart = {changeHeart} heart={heart1}/>
        <ItemBox coat = {poshmarkcoat} name = {poshname} price = {poshprice} ogprice = {ogprice} size = {poshsize} platform = {poshplatform} handleView = {handleViewPosh} changeHeart = {changeHeart2} heart={heart2}/>
        <NavBar handleFaves = {handleFaves} handleProfile={handleProfile} handleHome={handleHome}/>
    </div>
  );
}