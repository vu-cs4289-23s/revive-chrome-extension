import React, { useState, useEffect } from "react";

import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";
import {ItemBox} from "./itembox.js";

export const Home = () => {

    const [state, setState] = useState(null);
    const [product_name, setProductName] = useState([]);
    const [product_price, setProductPrice] = useState([]);
    const [image, setImage] = useState([]);
    const [size, setSize] = useState([]);
    const [url, setUrl] = useState([]);
    const [user_data, setUserData] = useState("");

    // set data from the user site
    // useEffect(() => {
    //     console.log("Use Effect starting");
    //     window.chrome.runtime.sendMessage({ action: "get-page-title" }, (response) => {
    //       console.log(response);
    //       response = response.split("|")[0].trim();
    //       setUserData(response);
    //     });
    //   }, []);

    // set data from the user site
    useEffect(() => {
        // set product name for all hits in array
        setUserData("denim jacket");
    }, [user_data]);

    //fetch data from poshmark
    useEffect(() => { //calls once on mount
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            };
            
        fetch("https://77f395kgwf.execute-api.us-east-1.amazonaws.com/opensearch-api-test?q=" + user_data, requestOptions)
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
        for (var i = 0; i < product_name.length; i++) {

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
        {itemBoxArray}
        <NavBar/>
    </div>
  );
}