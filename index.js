var howard = document.getElementById("howard");
var balloon = document.getElementById("balloon");
var balloon2 = document.getElementById("balloon2");
var clouds = document.getElementById("clouds");



//clouds
var num =-100;

setInterval(function(){
    clouds.style.left = num+"%";
    num=num+0.2;
    if(num>100){
        num = -100;
    }
},30);


//speaking
balloon.style.display = "block";

balloon.addEventListener("click", function(){
    balloon.style.display = "none";
   balloon2.style.display = "block";
});

balloon2.addEventListener("click", function(){
   balloon2.style.display = "none";
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
