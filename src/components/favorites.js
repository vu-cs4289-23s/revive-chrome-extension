import React, { useState, useEffect, useId } from "react";

import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";
import {ItemBox} from "./itembox.js";

import { ENDPOINT } from "../config.js"

export const Favorites = ({userId}) => {

    const [state, setState] = useState(null);
    const [product_name, setProductName] = useState([]);
    const [product_price, setProductPrice] = useState([]);
    const [image, setImage] = useState([]);
    const [size, setSize] = useState([]);
    const [url, setUrl] = useState([]);
    const [item_uuid, setItemUuid] = useState([]);
    const [likes, setLikes] = useState([]);

    // TODO - Update data when user likes or unlikes an item

    //fetch data from poshmark
    useEffect(() => { //calls once on mount
        if (!userId) {
            return;
        }

        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        console.log("Fetching data from: ", `${ENDPOINT}/liked_items/user_id=${userId}`)
            
        fetch(`${ENDPOINT}/liked_items?user_id=${userId}`, requestOptions)
            .then(response => response.text())
            .then(response => JSON.parse(response))
            .then(response => setState(response))
            .catch(error => console.log('error', error));          
    }, [userId])

    //set product name, price, image, size, url for all hits in array
    useEffect(() => {
        console.log(state);

        setProductName(state?.map((hit) => hit.product_name));
        setProductPrice(state?.map((hit) => hit.price));
        setImage(state?.map((hit) => hit.image_url));
        setUrl(state?.map((hit) => hit.url));
        setSize(state?.map((hit) => hit.size));
        setItemUuid(state?.map((hit) => hit.uuid));
        setLikes(state?.map((hit) => true));
    }, [state]);

    //populate the item boxes
    let itemBoxArray = [];
    if(product_name){
        // change to product_name.length if you want to see all results
        for (var i = 0; i < product_name.length; i++) {

            itemBoxArray.push(
                <ItemBox 
                coat = {image[i]} 
                name = {product_name[i]} 
                price = {product_price[i]}
                size = {size[i]} 
                platform = "Poshmark" 
                url = {url[i]}
                userId = {userId}
                item_uuid = {item_uuid[i]}
                liked = {likes[i]}
                setLikes = {setLikes}
                i = {i}
                />
            );
        }
    }

  return (
    <div class="bg-slate-50 rounded-xl">
        <TopBar/>
        <div class="m-4">
          <h1 class="text-2xl font-mono text-cyan-500 text-center">
          Favorites</h1>
        </div>
        {itemBoxArray}
        <NavBar/>
    </div>
  );
}