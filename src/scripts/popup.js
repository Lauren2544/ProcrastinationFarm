document.getElementById("openWebsite").addEventListener("click", function() {
    chrome.tabs.create({ url: "file:///Users/laurenrowe/Documents/Projects/ProcrastinationFarm/src/html/farm.html" });
});
