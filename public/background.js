// listener to get the item name from the user site
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Listening");
  if (message.action === 'get-page-title') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const pageTitle = tab.title;
      sendResponse(pageTitle);
    });
    return true;
  }
});

// listener for sign in authentication
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url && changeInfo.url.startsWith("https://example.com/oauth2/idpresponse")) {

    // get the authorization token (use this to get the access token)
    var authToken = new URLSearchParams(changeInfo.url.split("?")[1]).get("code").trim();
    const authHeader = btoa(`18u79hj2pun1qp370v006d7mm8:lij91eft1hvsrlsp9t2q6div0gvmfiisdr5cuabmm7kha34n3va`);

    // use the authentication token to obtain the access token and refresh token from Amazon Cognito
    fetch("https://revive-auth.auth.us-east-1.amazoncognito.com/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${authHeader}`
      },
      body: "grant_type=authorization_code&code=" + authToken + "&client_id=18u79hj2pun1qp370v006d7mm8&redirect_uri=https%3A%2F%2Fexample.com%2Foauth2%2Fidpresponse"
    }).then(function(response) {
      if (response.ok) {
        // console.log("response is ok");
        return response.json();
      } else {
        // console.log(response);
        throw new Error("Error obtaining access token");
      }
    }).then(function(data) {
      console.log(data);

      // localStorage doesn't work in Chrome extensions, so we'll use Chrome storage
      chrome.storage.local.set({
        "accessToken": data.access_token,
        "refreshToken": data.refresh_token
      }, function() {
        console.log("Access token and refresh token saved to Chrome storage");
      });

      chrome.tabs.remove(tabId);
      
    }).catch(function(error) {
      console.error(error);
    });
  }
});
