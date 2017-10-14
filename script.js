window.onload = function(){
	var tarCookie;
	var cookies = document.cookie;
	var prc = cookies.match( /myLastValue=(.*)/ );

	if(prc[1].indexOf(";") != -1){
		var end = prc[1].indexOf(";");
		var target = prc[1].slice(0,end);
		tarCookie = target;
	}else{
		tarCookie = prc[1];
	}

	document.form2.direct.value = tarCookie;
};

var ary = ["https://proxy.shkval.net/cgi-proxy/nph-proxy.pl/en/40/https/","https://proxy.shkval.net/glype/browse.php?u=http://"];

function phProxy(tarSite){
	document.getElementById('phproxy').contentDocument.getElementsByName('url')[0].value = tarSite;
	document.getElementById('phproxy').contentDocument.forms[0].submit();
	window.open(document.getElementById('phproxy').contentWindow.location.href.toString());
	}

function func(){
	var ways = document.getElementsByName('proxy') ;
	var isChecked = false;
	var site = form.search_engine.value;

	for(var i = 0;i <= 1; i++){
		if(ways[i].checked == true){
    			isChecked = true;
    			window.open(ary[i] + data[site]);
    		}
	}

	if(ways[2].checked == true){
		isChecked = true;
		phProxy(data[site]);
	}

	if(isChecked == false){
		alert("you must select at least 1 checkbox");
	}
}

function func2(){
	var ways = document.getElementsByName('site');
	var content = document.form2.direct.value;
	var tarUrl = content.replace(/(http|https):\/\//,"");
	var isChecked = false;

	if(tarUrl == false){
		alert("enter the url you want to go");
	}else{
		for(var i = 0;i <= 1;i++){
			if(ways[i].checked == true){
				window.open(ary[i] + tarUrl);
				document.cookie = 'myLastValue=';
				isChecked = true;
			}
		}

		if(ways[2].checked == true){
			phProxy(tarUrl);
			document.cookie = 'myLastValue=';
			isChecked = true;
		}

		if(isChecked == false){
			alert("you must select at least 1 checkbox");
			document.cookie = 'myLastValue=' + document.form2.direct.value +'; max-age=60*60*12';
		}
	}
}

function go(){
	if(window.event.keyCode == 13){
		document.getElementsByName('search')[0].click();
	}
}

var data ={
	google : "google.co.jp",
	yahoo : "yahoo.co.jp",
	duckduckgo : "duckduckgo.com",
	bing : "bing.jp",
	msn : "msn.com",
	excite : "excite.co.jp",
	infoseek : "infoseek.co.jp",
	livedoor : "livedoor.com",
	goo : "goo.ne.jp",
	fresheye : "fresheye.com",
	biglobe : "biglobe.ne.jp",
	nifty : "nifty.com",
	yandex : "yandex.com"
	};

/*document.getElementById('input').value = 'https://google.com';
document.getElementsByClassName('button')[0].click();
glype

document.getElementById('phproxy').contentDocument.getElementsByName('url')[0].value = "https://google.com";
document.getElementById('phproxy').contentDocument.forms[0].submit();
window.open(document.getElementById('phproxy').contentWindow.location.href.toString());
php-proxy

style="width:0;height:0;border:0; border:none;"
*/
