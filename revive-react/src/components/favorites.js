import React, { useState } from "react";

import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";
import {ItemBox} from "./itembox.js";

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

  return (
    <div class="bg-slate-50 rounded-xl">
        <TopBar/>
        {/* {itemBoxArray} */}
        nothing to see here! work in progress...
        <NavBar/>
    </div>
  );
}
