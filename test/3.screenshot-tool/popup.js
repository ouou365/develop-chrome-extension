document.getElementById("captureButton").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const activeTab = tabs[0];
        chrome.tabs.captureVisibleTab(activeTab.windowId, {format: "png"}, (dataUrl) => {
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'screenshot.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});