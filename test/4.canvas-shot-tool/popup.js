document.getElementById("captureCanvasButton").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: () => {
                const canvas = document.querySelector('canvas'); // Select the first canvas element on the page
                if (canvas) {
                    const dataUrl = canvas.toDataURL('image/png');
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'canvas_capture.png';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    alert('No canvas element found on the page.');
                }
            }
        });
    });
});