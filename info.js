var howard = document.getElementById("Howard"),
    bananaInfo = document.getElementById("bananaInfo"),
    jamInfo = document.getElementById("jamInfo"),
    paperInfo = document.getElementById("paperInfo"),
    pizzaInfo = document.getElementById("pizzaInfo"),
    bottleInfo = document.getElementById("bottleInfo"),
    back = document.getElementById("back"),
    forward = document.getElementById("forward"),
    baloon4 = document.getElementById("baloon4"),
    bgItems = document.getElementById("bgItems");


howard.addEventListener("click", function(){
   baloon3.style.display = "block"; 
});

baloon3.addEventListener("click", function(){
   baloon3.style.display = "none"; 
    bananaInfo.style.display = "block";
    back.style.display = "block";
    forward.style.display = "block";
    bgItems.style.display = "block";
});
    
    

    
forward.addEventListener("click", function(){
   if(bananaInfo.style.display == "block"){
       bananaInfo.style.display = "none";
       paperInfo.style.display = "block";
   } else if (paperInfo.style.display == "block"){
       paperInfo.style.display = "none";
       pizzaInfo.style.display = "block";
   } else if (pizzaInfo.style.display == "block"){
       pizzaInfo.style.display = "none";
       bottleInfo.style.display = "block";
   } else if (bottleInfo.style.display == "block"){
       bottleInfo.style.display = "none";
       jamInfo.style.display = "block";
   } else if (jamInfo.style.display == "block"){
       jamInfo.style.display = "none";
       baloon4.style.display = "block";
       forward.style.display = "none";
       bgItems.style.display = "none";
   }
});


back.addEventListener("click", function(){
   if(paperInfo.style.display == "block"){
       paperInfo.style.display = "none";
       bananaInfo.style.display = "block";
   } else if (bananaInfo.style.display == "block"){
       bananaInfo.style.display = "none";
       jamInfo.style.display = "block";
   } else if (jamInfo.style.display == "block"){
       jamInfo.style.display = "none";
       bottleInfo.style.display = "block";
   } else if (bottleInfo.style.display == "block"){
       bottleInfo.style.display = "none";
       pizzaInfo.style.display = "block";
   } else if (pizzaInfo.style.display == "block"){
       pizzaInfo.style.display = "none";
       paperInfo.style.display = "block";
   } else if (baloon4.style.display == "block"){
       baloon4.style.display = "none";
       bananaInfo.style.display = "block";
       forward.style.display = "block";
       bgItems.style.display = "block";
   } 
});

baloon4.addEventListener("click", function(){
    baloon4.style.display = "none";
    back.style.display = "none";
});

