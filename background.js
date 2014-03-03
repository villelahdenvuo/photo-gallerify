function onRequest(request, sender, sendResponse) {
  chrome.pageAction.show(sender.tab.id);
  sendResponse({});
};

chrome.runtime.onMessage.addListener(onRequest);

chrome.pageAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, {}, function (response) {});
});