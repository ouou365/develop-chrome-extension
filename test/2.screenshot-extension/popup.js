document.getElementById("captureButton").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const activeTab = tabs[0];
        chrome.tabs.captureVisibleTab(activeTab.windowId, {format: "png"}, (dataUrl) => {
            const img = document.createElement('img');
            img.src = dataUrl;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '100%';
            const div = document.createElement('div');
            div.style.position = 'fixed';
            div.style.top = '0';
            div.style.left = '0';
            div.style.width = '100%';
            div.style.height = '100%';
            div.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            div.style.display = 'flex';
            div.style.justifyContent = 'center';
            div.style.alignItems = 'center';
            div.style.zIndex = '10000';
            div.appendChild(img);
            div.addEventListener('click', () => document.body.removeChild(div));
            document.body.appendChild(div);
        });
    });
});