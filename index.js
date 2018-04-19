var howard = document.getElementById("howard");
var baloon = document.getElementById("baloon");
var baloon2 = document.getElementById("baloon2"),
    clowds = document.getElementById("clowds");


//speaking
howard.addEventListener("click", function(){
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
clowds.addEventListener("mouseenter", function(){
    function float(){
clowds.style.left = "0%";
    
setTimeout(function(){
   clowds.style.left = "100%";
}, 50); 
    }
    setInterval(float, 300);
});
