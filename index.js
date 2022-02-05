var a=(Math.floor(Math.random() * 6)) + 1;
if(a===1)
document.querySelectorAll("img")[0].setAttribute("src","dice1.png");
else if(a===2)
document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
else if(a===3)
document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
else if(a===4)
document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
else if(a===5)
document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
else if(a===6)
document.querySelectorAll("img")[0].setAttribute("src","dice6.png");

var a1=Math.floor(Math.random() * 6) + 1;


if(a1===1)
document.querySelectorAll("img")[0].setAttribute("src","dice1.png");
else if(a1===2)
document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
else if(a1===3)
document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
else if(a1===4)
document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
else if(a1===5)
document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
else if(a1===6)
document.querySelectorAll("img")[0].setAttribute("src","dice6.png");


if(a<a1)
document.querySelector("h1").innerHTML="<em>🚩 Vivek Wins!</em>";
else if(a>a1)
document.querySelector("h1").innerHTML="<em>🚩 Yash wins!</em>";
else
document.querySelector("h1").innerHTML="<em>🌠 It's a Draw!</em>";
