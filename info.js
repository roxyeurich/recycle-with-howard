var howard = document.getElementById("howard"),
    info1 = document.getElementById("info1"),
    info2 = document.getElementById("info2"),
    info3 = document.getElementById("info3"),
    info4 = document.getElementById("info4"),
    info4 = document.getElementById("info4"),
    info5 = document.getElementById("info5"),
    back = document.getElementById("back"),
    forward = document.getElementById("forward"),
    balloon4 = document.getElementById("balloon4"),
    bgItems = document.getElementById("bgItems"),
    infoBox = document.getElementById("infoBox"),
    howardPoked = document.getElementById("howardPoked");


//clouds
var num =-100;

setInterval(function(){
    clouds.style.left = num+"%";
    num=num+0.2;
    if(num>100){
        num = -100;
    }
},30);


//info balloons
        balloon3.style.display = "block"; 
        forward.style.display = "block";


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

    
forward.addEventListener("click", function(){
   if (balloon3.style.display == "block"){
          balloon3.style.display = "none"; 
    info1.style.display = "block";
    back.style.display = "block";
    forward.style.display = "block";
    bgItems.style.display = "block";
   } else if(info1.style.display == "block"){
       info1.style.display = "none";
       info2.style.display = "block";
   } else if (info2.style.display == "block"){
       info2.style.display = "none";
       info3.style.display = "block";
   } else if (info3.style.display == "block"){
       info3.style.display = "none";
       info4.style.display = "block";
   } else if (info4.style.display == "block"){
       info4.style.display = "none";
       info5.style.display = "block";
   } else if (info5.style.display == "block"){
       info5.style.display = "none";
       info6.style.display = "block";
   } else if (info6.style.display == "block"){
       info6.style.display = "none";
       info7.style.display = "block";
   } else if (info7.style.display == "block"){
       info7.style.display = "none";
       info8.style.display = "block";
   } else if (info8.style.display == "block"){
       info8.style.display = "none";
       balloon4.style.display = "block";
       forward.style.display = "none";
   }
});


back.addEventListener("click", function(){
   if(info8.style.display == "block"){
       info8.style.display = "none";
       info7.style.display = "block";
   } else if (info7.style.display == "block"){
       info7.style.display = "none";
       info6.style.display = "block";
   } else if (info6.style.display == "block"){
       info6.style.display = "none";
       info5.style.display = "block";
   } else if (info5.style.display == "block"){
       info5.style.display = "none";
       info4.style.display = "block";
   } else if (info4.style.display == "block"){
       info4.style.display = "none";
       info3.style.display = "block";
   } else if (info3.style.display == "block"){
       info3.style.display = "none";
       info2.style.display = "block";
   } else if (info2.style.display == "block"){
       info2.style.display = "none";
       info1.style.display = "block";
   } else if (info1.style.display == "block"){
       info1.style.display = "none";
       info5.style.display = "block";
   } else if (balloon4.style.display == "block"){
       balloon4.style.display = "none";
       info1.style.display = "block";
       forward.style.display = "block";
   } 
});

balloon4.addEventListener("click", function(){
    balloon4.style.display = "none";
    back.style.display = "none";
});

