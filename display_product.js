// // Receive the product title on the second website
// fetch("index.html")
// .then(function(response) {
//   return response.json();
// })
// .then(function(data) {
//   // Display the product title on the page
//   document.getElementById("product-title").innerHTML = data.title;
// })
// .catch(function(error) {
//   console.error("Error receiving product title:", error);
// });


// Listen for messages
window.addEventListener("message", function (event) {
  if (event.source !== window) return;
  if (event.data.type === "PRODUCT_TITLE") {
    // Get the product title from the message data
    var productTitle = event.data.text;

    // Display the product title on the page
    var productTitleEl = document.getElementById("product-title");
    productTitleEl.innerText = productTitle;

  }
});
