import React, { useState, useEffect } from "react";

import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";
import {ItemBox} from "./itembox.js";

const ENDPOINT = "https://77f395kgwf.execute-api.us-east-1.amazonaws.com/prod/liked_items";

export const Favorites = () => {

    const [state, setState] = useState(null);
    const [product_name, setProductName] = useState([]);
    const [product_price, setProductPrice] = useState([]);
    const [image, setImage] = useState([]);
    const [size, setSize] = useState([]);
    const [url, setUrl] = useState([]);
    const [user_data, setUserData] = useState("");

    // set data from the user site
    useEffect(() => {
        console.log("Use Effect starting");
        window.chrome.runtime.sendMessage({ action: "get-page-title" }, (response) => {
          console.log(response);
          response = response.split("|")[0].trim();
          setUserData(response);
        });
      }, []);

    // set data from the user site
    // useEffect(() => {
    //     // set product name for all hits in array
    //     setUserData("denim jacket");
    // }, [user_data]);

    //fetch data from poshmark
    useEffect(() => { //calls once on mount
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            body: JSON.stringify({
                "user_id": "5f9f9b0b-9b5f-4b9f-9b0b-9b5f9b0b9b5f",
            }),
        };
            
        fetch(ENDPOINT, requestOptions)
            .then(response => response.text())
            .then(response => JSON.parse(response))
            .then(response => setState(response))
            .catch(error => console.log('error', error));          
    }, [user_data])

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