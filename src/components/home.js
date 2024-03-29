import React, { useState, useEffect } from "react";

import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";
import {ItemBox} from "./itembox.js";

import { ENDPOINT } from "../config.js";

export const Home = ({userId}) => {

    const [state, setState] = useState(null);
    const [product_name, setProductName] = useState([]);
    const [product_price, setProductPrice] = useState([]);
    const [image, setImage] = useState([]);
    const [size, setSize] = useState([]);
    const [url, setUrl] = useState([]);
    const [item_uuid, setItemUuid] = useState([]);
    const [user_data, setUserData] = useState("");
    const [likes, setLikes] = useState([]);

    // TODO - sync likes between views
    // TODO - debug why user_data is intermittently undefined
    
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
            };
            
        fetch(`${ENDPOINT}/search?q=${user_data}`, requestOptions)
            .then(response => response.text())
            .then(response => JSON.parse(response))
            .then(response => setState(response))
            .catch(error => console.log('error', error));          
    }, [user_data])

    //set product name, price, image, size, url for all hits in array
    useEffect(() => {
        console.log(state);

        // Set product de
        setProductName(state?.hits?.hits.map((hit) => hit._source.product_name.S));
        setProductPrice(state?.hits?.hits.map((hit) => hit._source.price.S));
        setImage(state?.hits?.hits.map((hit) => hit._source.image_url.S));
        setUrl(state?.hits?.hits.map((hit) => hit._source.url?.S));
        setSize(state?.hits?.hits.map((hit) => hit._source.size.S));
        setItemUuid(state?.hits?.hits?.map((hit) => hit._source.uuid?.S));
        setLikes(state?.hits?.hits?.map((hit) => false));

    }, [state]);

    //populate the item boxes
    let itemBoxArray = [];
    if(product_name){
        // change to product_name.length if you want to see all results
        for (var i = 0; i < 3; i++) {

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
        {itemBoxArray}
        <NavBar/>
    </div>
  );
}