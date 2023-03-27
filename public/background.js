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