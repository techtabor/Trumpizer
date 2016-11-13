// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log('Trumpizing ' + tab.url + '...');
    chrome.tabs.executeScript(
        tab.id,
        {file: "content_script.js"},
        function() {
            if (chrome.runtime.lastError) {	
                console.error(chrome.runtime.lastError.message);
            }
        }
    );
});