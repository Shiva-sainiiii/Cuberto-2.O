var icon = document.querySelector("#ic");
var menupage = document.querySelector("#menupage");

var flag = 0;

icon.addEventListener("click", function() {
    if(flag == 0) {
    icon.style.color="white";
        menupage.style.width = "100vw";
        flag = 1;   }
     else {
        icon.style.color="black";
        menupage.style.width = "0vw";
        flag = 0; }
});
menupage.addEventListener("touchstart",function(){
menupage.style.width = "0vw";
icon.style.color="black";
})





var instagram = document.querySelector("#instagram");
var linkedin = document.querySelector("#linkedin");
var dribble = document.querySelector("#dribble");
var github = document.querySelector("#github");
var youtube = document.querySelector("#youtube");
var behance = document.querySelector("#behance");
var twitter = document.querySelector("#twitter");

var upi1 = document.querySelector("#i1");
var upi2 = document.querySelector("#i2");
var upi3 = document.querySelector("#i3");
var upi4 = document.querySelector("#i4");
var upi5 = document.querySelector("#i5");
var upi6 = document.querySelector("#i6");
var upi7 = document.querySelector("#i7");

var igp = document.querySelector("#instagram p");
var lip = document.querySelector("#linkedin p");
var ytp = document.querySelector("#youtube p");
var bhp = document.querySelector("#behance p");
var tp = document.querySelector("#twitter p");
var ghp = document.querySelector("#github p");
var dp = document.querySelector("#dribble p");



instagram.addEventListener("touchstart", function(){
instagram.style.backgroundColor="#fff";
upi1.style.color="black";
igp.style.color="black";
});
instagram.addEventListener("touchend", function(){
instagram.style.backgroundColor="black";
upi1.style.color="white";
igp.style.color="white";
});

youtube.addEventListener("touchstart", function(){
youtube.style.backgroundColor="#fff";
upi5.style.color="black";
ytp.style.color="black";
});
youtube.addEventListener("touchend", function(){
youtube.style.backgroundColor="black";
upi5.style.color="white";
ytp.style.color="white";
});


linkedin.addEventListener("touchstart", function(){
linkedin.style.backgroundColor="#fff";
upi2.style.color="black";
lip.style.color="black";
});
linkedin.addEventListener("touchend", function(){
linkedin.style.backgroundColor="black";
upi2.style.color="white";
lip.style.color="white";
});


github.addEventListener("touchstart", function(){
github.style.backgroundColor="#fff";
upi4.style.color="black";
ghp.style.color="black";
});
github.addEventListener("touchend", function(){
github.style.backgroundColor="black";
upi4.style.color="white";
ghp.style.color="white";
});


twitter.addEventListener("touchstart", function(){
twitter.style.backgroundColor="#fff";
upi7.style.color="black";
tp.style.color="black";
});
twitter.addEventListener("touchend", function(){
twitter.style.backgroundColor="black";
upi7.style.color="white";
tp.style.color="white";
});


behance.addEventListener("touchstart", function(){
behance.style.backgroundColor="#fff";
upi6.style.color="black";
bhp.style.color="black";
});
behance.addEventListener("touchend", function(){
behance.style.backgroundColor="black";
upi6.style.color="white";
bhp.style.color="white";
});


dribble.addEventListener("touchstart", function(){
dribble.style.backgroundColor="#fff";
upi3.style.color="black";
dp.style.color="black";
});
dribble.addEventListener("touchend", function(){
dribble.style.backgroundColor="black";
upi3.style.color="white";
dp.style.color="white";
});




var nav4 = document.querySelector("#nav4 button");
nav4.addEventListener("touchstart", function(){
nav4.style.backgroundColor="red";
nav4.style.color="white";
nav4.style.boxShadow="0px 0px 10px 1px black";
});
nav4.addEventListener("touchend", function(){
nav4.style.backgroundColor="white";
nav4.style.color="black";
nav4.style.boxShadow="none";
});



var lastdiv1 = document.querySelector("#lastdiv1");
lastdiv1.addEventListener("touchstart", function(){
lastdiv1.style.backgroundColor="white";
lastdiv1.style.color="black";
});
lastdiv1.addEventListener("touchend", function(){
lastdiv1.style.backgroundColor="transparent";
lastdiv1.style.color="white";
});

var ekdumlast = document.querySelector("#ekdumlast");
ekdumlast.addEventListener("touchstart", function(){
ekdumlast.style.backgroundColor="white";
ekdumlast.style.color="black";
});
ekdumlast.addEventListener("touchend", function(){
ekdumlast.style.backgroundColor="transparent";
ekdumlast.style.color="white";
});


var ekdumlast1 = document.querySelector("#ekdumlast1");
ekdumlast1.addEventListener("touchstart", function(){
ekdumlast1.style.backgroundColor="white";
ekdumlast1.style.color="black";
});
ekdumlast1.addEventListener("touchend", function(){
ekdumlast1.style.backgroundColor="transparent";
ekdumlast1.style.color="white";
});


var hara1 = document.querySelector("#hara1");
hara1.addEventListener("touchstart", function(){
hara1.style.backgroundColor="white";
hara1.style.color="black";
});
hara1.addEventListener("touchend", function(){
hara1.style.backgroundColor="transparent";
hara1.style.color="white";
});


var hara2 = document.querySelector("#hara2");
hara2.addEventListener("touchstart", function(){
hara2.style.backgroundColor="white";
hara2.style.color="black";
});
hara2.addEventListener("touchend", function(){
hara2.style.backgroundColor="transparent";
hara2.style.color="white";
});
    
