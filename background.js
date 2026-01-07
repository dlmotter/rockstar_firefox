// Firefox-compatible background script for rockstar extension
var timeoutID = 0;

// Use browser API for Firefox compatibility (also works in Chrome)
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

browserAPI.omnibox.onInputChanged.addListener(function (text, suggest) {
    browserAPI.tabs.query({active: true, currentWindow: true}, function (tabs) {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            browserAPI.tabs.sendMessage(tabs[0].id, {group: text}, function (response) {
                // Handle potential errors in Firefox
                if (browserAPI.runtime.lastError) {
                    console.log('Error sending message:', browserAPI.runtime.lastError);
                    return;
                }
                if (response && response.groups) {
                    suggest(response.groups);
                }
            });
        }, 400);
    });
});

browserAPI.omnibox.onInputEntered.addListener(function (text, disposition) {
    browserAPI.tabs.query({active: true, currentWindow: true}, function (tabs) {
        if (disposition == 'currentTab') {
            browserAPI.tabs.update(tabs[0].id, {url: text});
        } else {
            browserAPI.tabs.create({url: text}); // Press Alt+Enter for this.
        }
    });
});

// Firefox uses different event for initialization
const initEvent = browserAPI.runtime.onInstalled || browserAPI.runtime.onStartup;
if (initEvent) {
    initEvent.addListener(function () {
        // Note: Firefox doesn't support declarativeContent the same way as Chrome
        // The extension will work without it - declarativeContent was mainly used
        // to show/hide the page action button based on the current page
        console.log('Rockstar extension initialized for Firefox');
    });
}
