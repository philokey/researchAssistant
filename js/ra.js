chrome.storage.local.get("raRunning", function(result){
	if (result.raRunning == "true") {
		window.location = chrome.extension.getURL('inner.html');
	}
}) 