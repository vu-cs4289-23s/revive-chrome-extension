import React, { useState } from "react";

import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";
import {ItemBox} from "./itembox.js";
import thredupskirt from './images/skirt-thredup.jpg';
import thredupdress from './images/dress-thredup.jpg';

export const Favorites = () => {

    // const [state, setState] = useState(null);
    // const [product_name, setProductName] = useState([]);
    // const [product_price, setProductPrice] = useState([]);
    // const [image, setImage] = useState([]);
    // const [size, setSize] = useState([]);
    // const [url, setUrl] = useState([]);

    // //fetch user's favorites
    // useEffect(() => { //calls once on mount
    //     let requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //         };
            
    //     fetch("/users/{user_id}/liked_items", requestOptions)
    //         .then(response => response.text())
    //         .then(response => JSON.parse(response))
    //         .then(response => setState(response))
    //         .catch(error => console.log('error', error));          
    // }, [state]) //should there be anything in dependency array?

    // //this may be overkill. Array might look different from the one in home.js
    // //set product name, price, image, size, url for all hits in array
    // useEffect(() => {
    //     // set product name for all hits in array
    //     setProductName(state?.hits?.hits.map((hit) => hit._source.product_name.S));
    //     console.log(state);
    // }, [state]);

    // useEffect(() => {
    //     // set product price for all hits in array
    //     setProductPrice(state?.hits?.hits.map((hit) => hit._source.price.S));
    // }, [state]);

    // useEffect(() => {
    //     // set product image for all hits in array
    //     setImage(state?.hits?.hits.map((hit) => hit._source.image_url.S));
    // }, [state]);

    // useEffect(() => {
    //     // set product url for all hits in array
    //     setUrl(state?.hits?.hits.map((hit) => hit._source.url?.S));
    // }, [state]);

    // useEffect(() => {
    //     // set product size for all hits in array
    //     setSize(state?.hits?.hits.map((hit) => hit._source.size.S));
    // }, [state]);


    // //populate the item boxes
    // let itemBoxArray = [];
    // if(product_name){
    //     for (var i = 0; i < 3; i++) {

    //         itemBoxArray.push(
    //             <ItemBox 
    //             coat = {image[i]} 
    //             name = {product_name[i]} 
    //             price = {product_price[i]}
    //             size = {size[i]} 
    //             platform = "Poshmark" 
    //             url = {url[i]}
    //             />
    //         );
    //     }
    // }

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
    let thredname = "Madewell Dress";
    let poshname = "Inusway Skirt";
    let thredprice = "30.79";
    let poshprice = "27.99";
    let ogprice = "50.00";
    let thredsize = "L";
    let poshsize = "M";
    let thredplatform = "ThredUp";
    let poshplatform = "Thredup";

    return (
      <div class="bg-slate-50">
      <div class="text-cyan-500">
          <TopBar/>
          <div class="m-4">
             <h1 class="text-2xl font-mono text-cyan-500 text-center">Favorites</h1>
         </div> 
          <ItemBox coat = {thredupdress} name = {thredname} price = {thredprice} ogprice = {ogprice} size = {thredsize} platform = {thredplatform} handleView = {handleView}/>
          <ItemBox coat = {thredupskirt} name = {poshname} price = {poshprice} ogprice = {ogprice} size = {poshsize} platform = {poshplatform} handleView = {handleViewPosh}/>
          <NavBar/>
      </div>
      </div>
    );
  // return (
  //   <div class="bg-slate-50 rounded-xl">
  //       <TopBar/>
  //       <div class="m-4">
  //           <h1 class="text-2xl font-mono text-cyan-500 text-center">Favorites</h1>
  //       </div> 
  //       {/* {itemBoxArray} */}
  //       nothing to see here! work in progress...
  //       <NavBar/>
  //   </div>
  // );
}
