var howard = document.getElementById("howard"),
    clowds = document.getElementById("clowds"),
    baloon5 = document.getElementById("baloon5");


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


