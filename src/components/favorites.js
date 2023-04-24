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
        // set product name for all hits in array
        setProductName(state?.hits?.hits.map((hit) => hit._source.product_name.S));
        console.log(state);
    }, [state]);

    useEffect(() => {
        // set product price for all hits in array
        setProductPrice(state?.hits?.hits.map((hit) => hit._source.price.S));
    }, [state]);

    useEffect(() => {
        // set product image for all hits in array
        setImage(state?.hits?.hits.map((hit) => hit._source.image_url.S));
    }, [state]);

    useEffect(() => {
        // set product url for all hits in array
        setUrl(state?.hits?.hits.map((hit) => hit._source.url?.S));
    }, [state]);

    useEffect(() => {
        // set product size for all hits in array
        setSize(state?.hits?.hits.map((hit) => hit._source.size.S));
    }, [state]);

    //populate the item boxes
    let itemBoxArray = [];
    if(product_name){
        // change to product_name.length if you want to see all results
        for (var i = 3; i < 5; i++) {

            itemBoxArray.push(
                <ItemBox 
                coat = {image[i]} 
                name = {product_name[i]} 
                price = {product_price[i]}
                size = {size[i]} 
                platform = "Poshmark" 
                url = {url[i]}
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