// popup.js
document.getElementById('extractCanvasButton').addEventListener('click', () => {
    // Get the active tab and send a message to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'extractCanvas' }, (response) => {
            if (response && response.dataURL) {
                // Set the canvas image in the popup
                const img = document.getElementById('canvasImage');
                img.src = response.dataURL;

                // // Set the width and height of the <img> to match the canvas
                // img.width = response.width;
                // img.height = response.height;
            } else {
                alert('No canvas found on the current page.');
            }
        });
    });
});
