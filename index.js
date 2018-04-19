var howard = document.getElementById("Howard");
var baloon = document.getElementById("baloon");
var baloon2 = document.getElementById("baloon2");

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


