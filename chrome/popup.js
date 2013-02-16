window.onload = function() 
{ 
    var bg = chrome.extension.getBackgroundPage();
    var infos = "";
    bg.getCount();
    document.getElementById('glink').href=bg.rlink;
    for (var i=0; i<bg.items.length; i++) {
		   infos += bg.items[i].company + ' - ' + bg.items[i].amount + '&euro; - ' + bg.items[i].duedate + '<br>';
		}
		infos += "<br>";
		if (infos) {
			document.getElementById('infos').innerHTML=infos;
		}
}