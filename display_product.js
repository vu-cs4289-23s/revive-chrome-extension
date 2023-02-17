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

// creates a product item to append to the product list
function createProductItem(product) {
  var productItem = $("<div>").addClass("product-item");
  var productImage = $("<img>").addClass("product-image");
  productImage.attr("src", product.image);
  var productTitle = $("<p>").addClass("product-title").text(product.title);
  var productDescription = $("<p>").addClass("product-description").text(product.description);
  var productPrice = $("<p>").addClass("product-price").text(product.price);

  productItem.append(productImage, productTitle, productDescription, productPrice);
  $(".product-list").append(productItem);
}

// creates a product object with the given parameters (currently grabs it from index.html input)
function createProductObject() {
  var product = {
    title: $("#input-product-title").val(),
    description: $("#input-product-description").val(),
    price: $("#input-product-price").val(),
    image: $("#input-product-image").val()
  };

  console.log(product);
  return product;
}

// rest api call template to get product info
function getProductInfo() {
  fetch(`/api/products/${productId}`, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => {
      // handle response data
      const title = data.title;
      const description = data.description;
      const price = data.price;
      const imageUrl = data.image_url;

      console.log(title, description, price, imageUrl);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}