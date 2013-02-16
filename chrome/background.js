var rlink;
var items = [];

$(document).ready(function() {
	getCount();
	$(document).everyTime("43200s",function(i) {
	   getCount();
  });
});

function getCount() {
	var req = new XMLHttpRequest();
	req.open(
	    "GET",
	    "http://<your-gsales-url>/api.php",
	    true);
	req.onload = function(r) {
		items = [];
		var cc = document.createElement("count");
  	var response = JSON.parse(req.responseText);
  	for(var i in response.items)	{
  		//console.log(response.items[i]);
	    items[i]=response.items[i];
		}
  	//console.log(response);
  	rlink = response['link'];
  	chrome.browserAction.setBadgeText({text:String(response['count'])});
  	chrome.browserAction.setTitle({title:String(response['count'])});
	}
	req.send(null);
}
