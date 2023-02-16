// wait until the website is loaded, then console log the product name
window.onload = () => {

    // Get the product title element from the Uniqlo website
    var productTitle = document.querySelector('h1.fr-ec-display').innerText;

    // Log the product title to the console
    console.log("Product title...", productTitle);

    // Send the product title to the index.html file
    window.postMessage({ type: "PRODUCT_TITLE", text: productTitle }, "file://");
}