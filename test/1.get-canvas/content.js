// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'extractCanvas') {
        const canvaslist = document.getElementsByTagName('canvas');  // Find the first <canvas> element
        if (canvaslist) {
            const canvas = canvaslist[0];

            const ctx = canvas.getContext('2d');
            const image = new Image(60, 45); // Using optional size for image
            image.onload = drawImageActualSize; // Draw when image has loaded
            image.src = "https://mdn.github.io/shared-assets/images/examples/rhino.jpg";
            ctx.drawImage(this, 0, 0);

            // Get the dimensions of the canvas
            const width = canvas.width;
            const height = canvas.height;

            // Convert canvas to a data URL (image in base64 format)
            const dataURL = canvas.toDataURL();

            // Send the canvas data URL and dimensions to the popup
            sendResponse({ dataURL: dataURL, width: width, height: height });
        } else {
            sendResponse({ dataURL: null });
        }
    }

    // Keep the message channel open for sendResponse
    return true;
});
