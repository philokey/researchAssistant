$(document).ready(function() {
	chrome.storage.local.get("raRunning", function(result) {
		var isRunning = result.raRunning;
		console.log("isRunning: " + isRunning)
		if (isRunning != "true") {
			chrome.storage.local.set({"isRunning": "false"});
			$("#is_running").addClass("toggle-off");
		}
	});

	$(".toggle-radio").click(function() {
		var classTp = $("#is_running").attr("class");
		classTp = classTp.split(" ");
		console.log(classTp[classTp.length-1]);
		if (classTp[classTp.length-1] == "toggle-off") {
			chrome.storage.local.set({"raRunning": "true"});
		} else {
			chrome.storage.local.set({"raRunning": "false"});
		}
		chrome.storage.local.get("raRunning", function(data) {
			console.log("state:" + data.raRunning);
		});
	});
})