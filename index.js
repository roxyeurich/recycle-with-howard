var howard = document.getElementById("howard");
var baloon = document.getElementById("baloon");
var baloon2 = document.getElementById("baloon2"),
    clowds = document.getElementById("clowds"),
    clowds2 = document.getElementById("clowds2");


//speaking
document.addEventListener("mouseenter", function(){
   baloon.style.display = "block";
});

baloon.addEventListener("click", function(){
    baloon.style.display = "none";
   baloon2.style.display = "block";
});

baloon2.addEventListener("click", function(){
   baloon2.style.display = "none";
});


//clowds
var num =-100;

setInterval(function(){
    clowds.style.left = num+"%";
    num=num+0.2;
    if(num>100){
        num = -100;
    }
},30);

//clowds 2
var num =-200;

setInterval(function(){
    clowds2.style.left = num+"%";
    num=num+0.2;
    if(num>100){
        num = -200;
    }
},30);


howard.addEventListener("click", function(){
   howard.style.display:"none";
});