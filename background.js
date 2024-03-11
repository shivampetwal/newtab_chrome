// background.js
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ currentWallpaper: '' });
});
