var ary = ["./cgi-proxy/nph-proxy.pl/en/20/https/","./php-proxy/index.php?q=","./glype/browse.php?u=http://"];
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

window.onload = function(){
	var obj = document.cookie.match(/myLastValue=(.*)/);
	document.form2.direct.value = proc(obj);
};

/*
var auth = document.cookie.match(/isAuth=(.*)/);
var ref = document.cookie.match(/referrer=(.*)/);
if(proc(auth) != "lycoris" && proc(ref) != "radiata"){
        location.href = "./index.php";
}

setTimeout(function(){document.cookie = 'isAuth=lycoris; max-age=60*60*24*7';},3000);

//somehow this doesn't work
*/

function proc(prev){
        if(prev[1].indexOf(";") != -1){
                var end = prev[1].indexOf(";");
                var target = prev[1].slice(0,end);
                return target;
        }else{
                return prev[1];
        }
}

function func(){
	var ways = document.getElementsByName('proxy') ;
	var isChecked = false;
	var site = form.search_engine.value;

	for(var i = 0;i <= 2; i++){
		if(ways[i].checked == true){
    			isChecked = true;
    			window.open(ary[i] + data[site]);
    		}
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
		document.cookie = 'myLastValue=' + document.form2.direct.value +'; max-age=60*60*12';
		for(var i = 0;i <= 2;i++){
			if(ways[i].checked == true){
				window.open(ary[i] + tarUrl);
				isChecked = true;
			}
		}

		if(isChecked == false){
			alert("you must select at least 1 checkbox");
		}
	}
}

function go(){
	if(window.event.keyCode == 13){
		func2();
	}
}

/*document.getElementById('input').value = 'https://google.com';
document.getElementsByClassName('button')[0].click();
glype
*/
