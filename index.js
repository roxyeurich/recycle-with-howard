var howard = document.getElementById("howard");
var baloon = document.getElementById("baloon");
var baloon2 = document.getElementById("baloon2");
var clowds = document.getElementById("clowds");



//clowds
var num =-100;

setInterval(function(){
    clowds.style.left = num+"%";
    num=num+0.2;
    if(num>100){
        num = -100;
    }
},30);


//speaking
baloon.style.display = "block";

baloon.addEventListener("click", function(){
    baloon.style.display = "none";
   baloon2.style.display = "block";
});

baloon2.addEventListener("click", function(){
   baloon2.style.display = "none";
});


howard.addEventListener("click", function(){
   howard.style.display = "none";
});



//howard poke
var howardSound = new Audio('audio/howardSound.mp3');


howard.addEventListener("click", function(){
    poke();
    
    function poke(){   
        
                howardPoked.style.display = "block";
                howard.style.display = "none";
                howardSound.play();
                howardSound.volume = 0.2;
            setTimeout(function() {
                howardPoked.style.display = "none";
                howard.style.display = "block";
            }, 250);
            }

    
});    
