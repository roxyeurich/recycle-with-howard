var howard = document.getElementById("howard"),
    clouds = document.getElementById("clouds"),
    balloon5 = document.getElementById("balloon5"),
    balloonAlert = document.getElementById("balloonAlert"),
    banana = document.getElementById("banana"),
    paper = document.getElementById("paper"),
    jam = document.getElementById("jam"),
    box = document.getElementById("box"),
    bottle = document.getElementById("bottle"),
    greenBin = document.getElementById("greenBin"),
    blackBin = document.getElementById("blackBin"),
    blueBin = document.getElementById("blueBin"),
    yellowBin = document.getElementById("yellowBin"),
    cursor = document.getElementById("cursorChange"),
    myreset = document.getElementById("myreset"),
    points = document.getElementById("points"),
    pts = document.getElementById("pts"),
    apple = document.getElementById("apple"),
    duckling = document.getElementById("duckling"),
    pen = document.getElementById("pen"),
    toothpaste = document.getElementById("toothpaste"),
    balloonPts = document.getElementById("balloonPts"),
    balloonVictory = document.getElementById("balloonVictory");


//intro balloon
balloon5.style.display = "block";

balloon5.addEventListener("click", function(){
    balloon5.style.display = "none";
});

//reset
myreset.addEventListener("click", function(){
    location.reload();
});

//clouds

//clouds.addEventListener("mouseenter", function(){
//    function float(){
//
//    
//setTimeout(function(){
//   clouds.style.left = "100%";
//}, 50); 
//    }
//    setInterval(float, 300);
//});
var num =-100;

setInterval(function(){
    clouds.style.left = num+"%";
    num=num+0.2;
    if(num>100){
        num = -100;
    }
},30);

//items move
var itemName = "";

//point system
var points = 0;
var noPts = 0;

//taking items
function takeItem(el){
    imgsrc = el.src;
    cursor.src = imgsrc;
    cursor.style.display = "block";
}

//picking item and matching items to bin
bottle.addEventListener("click", function(){
   takeItem(this);
    itemName = blueBin;
    bottle.style.display = "none";
});

toothpaste.addEventListener("click", function(){
   takeItem(this);
    itemName = blueBin;
    toothpaste.style.display = "none";
}); 

paper.addEventListener("click", function(){
   takeItem(this);
    itemName = yellowBin;
    paper.style.display = "none";
});

duckling.addEventListener("click", function(){
   takeItem(this);
    itemName = blackBin;
    duckling.style.display = "none";
});

pen.addEventListener("click", function(){
   takeItem(this);
    itemName = blackBin;
    pen.style.display = "none";
}); 

banana.addEventListener("click", function(){
   takeItem(this);
    itemName = greenBin;
    banana.style.display = "none";
});

apple.addEventListener("click", function(){
   takeItem(this);
    itemName = greenBin;
    apple.style.display = "none";
});

box.addEventListener("click", function(){
   takeItem(this);
    itemName = greenBin;
    box.style.display = "none";
});

//pick up item with cursor
document.body.addEventListener("mousemove", function(ev){
        cursor.style.left = ev.pageX-45+"px";
        cursor.style.top = ev.pageY-45+"px"; 
        
});


//matching bin
var trashSound = new Audio('audio/trashSound.mp3');
var victorySound = new Audio('audio/victorySound.mp3');

function pickBin(bname){
    if(itemName == bname){
        cursor.style.display = "none";
        points++;
        console.log(points);
        pts.value = points;
        disposingGarb();
        trashSound.play();
        trashSound.volume = 0.3;
        
        balloon5.style.display = "none";
        balloonPts.style.display = "block";
        
        

        
        if (pts.value == "8"){
            balloonVictory.style.display = "block";
            balloonPts.style.display = "none";
            victorySound.play();
            victorySound.volume = 0.3;
            
        }
        

        function disposingGarb(){    
            bname.style.transform = "scale(1.5)";

            setTimeout(function() {
                bname.style.transform = "scale(1)";
            }, 250);
        }

        
    } else {
        noPts++;
    }
    
    if (noPts > 4){
        
        if(balloon5.style.display == "block"){
            balloon5.style.display = "none"; 
            balloonAlert.style.display = "block"; 
        } else {
            balloonAlert.style.display = "block";
        }
        
        if (balloonPts.style.display == "block"){
            balloonAlert.style.display = "none";
        }
    }

}


//Victory
balloonVictory.addEventListener("click", function(){
    balloonVictory.style.display = "none";
});
//balloonAlert
balloonAlert.addEventListener("click", function(){
    balloonAlert.style.display = "none";
});
//pts balloon
balloonPts.addEventListener("click", function(){
    balloonPts.style.display = "none";
});
//clickable bins
blackBin.addEventListener("click", function(){
    pickBin(this);
});

greenBin.addEventListener("click", function(){
    pickBin(this);
});

yellowBin.addEventListener("click", function(){
    pickBin(this);
});

blueBin.addEventListener("click", function(){
    pickBin(this);
});


//howard move mouse
howard.addEventListener("click", function(){
    document.body.addEventListener("mousemove", function(ev){
        howard.style.left = ev.pageX-130+"px";
        howard.style.top = ev.pageY-320+"px";  
    });          
});
    
//dropping items
start.addEventListener("click", function(){

    function dropPaper(){

    paper.style.transform = "translateY(1050px)";
    
setTimeout(function(){
    paper.style.transform = "translateY(1050px)";
}, 500); 
    }
    setInterval(dropPaper, 1000);
    
    
    function dropBanana(){

    banana.style.transform = "translateY(960px)";
    
setTimeout(function(){
    banana.style.transform = "translateY(960px)";
}, 2000); 
    }
    setInterval(dropBanana, 7000);
    
    function dropBox(){

    box.style.transform = "translateY(1000px)";
    
setTimeout(function(){
    box.style.transform = "translateY(1000px)";
}, 2000); 
    }
    setInterval(dropBox, 10000); 
    
    
    function dropBottle(){

    bottle.style.transform = "translateY(980px)";
    
setTimeout(function(){
    bottle.style.transform = "translateY(980px)";
}, 2000); 
    }
    setInterval(dropBottle, 14000); 
    
    
    function dropPen(){

    pen.style.transform = "translateY(1100px)";
    
setTimeout(function(){
    pen.style.transform = "translateY(1100px)";
}, 2000); 
    }
    setInterval(dropPen, 16000);     
    
  
    function dropDuck(){

    duckling.style.transform = "translateY(1100px)";
    
setTimeout(function(){
    duckling.style.transform = "translateY(1100px)";
}, 2000); 
    }
    setInterval(dropDuck, 18000);  
    

    function dropApple(){

    apple.style.transform = "translateY(1100px)";
    
setTimeout(function(){
    apple.style.transform = "translateY(1100px)";
}, 2000); 
    }
    setInterval(dropApple, 20000); 
    
    
    function dropTube(){

    toothpaste.style.transform = "translateY(1100px)";
    
setTimeout(function(){
    toothpaste.style.transform = "translateY(1100px)";
}, 2000); 
    }
    setInterval(dropTube, 22000);  

  
    
});




// garbage rain

//var dispDiv = document.getElementById("wrap"),
//    start = document.getElementById("start"),
//    stop = document.getElementById("stop");
//
//var max = 3;
//var min = 1;
//
//function makeItRain(){
//
//    
//  var candy = document.createElement("img");
//    var mleft = Math.round(Math.random()*100);
//    var mdim = Math.round(Math.random()*40)+10;
//    Math.floor(Math.random() * 3) + 1;
//    
//    
//    candy.src = "svgs/paper.svg";
//    
//    candy.className = "candies";
//    candy.style.left = mleft+"%";
//    candy.style.height = mdim+"px";
//    candy.style.width = mdim+"px";
//    
//    dispDiv.appendChild(candy);
//    
//    if(mdim > 40){
//        candy.style.transition = "top 10s";
//    }else if (mdim > 30){
//        candy.style.transition = "top 11s";
//    } else if (mdim > 20){
//        candy.style.transition = "top 12s";
//    }else {
//        candy.style.transition = "top 13s";
//    }
//    
//    setTimeout(function(){
//        candy.style.top = "55%";
//        
//        setTimeout (function(){
//            dispDiv.removeChild(candy);
//        },10000);
//    },10); 
//    
//}
//
//function makeItRainTwice(){
//    
//  var candy = document.createElement("img");
//    var mleft = Math.round(Math.random()*100);
//    var mdim = Math.round(Math.random()*40)+10;
//    
//    candy.src = "svgs/bottle.svg";
//    candy.className = "candies";
//    candy.style.left = mleft+"%";
//    candy.style.height = mdim+"px";
//    candy.style.width = mdim+"px";
//    
//    dispDiv.appendChild(candy);
//    
//    if(mdim > 40){
//        candy.style.transition = "top 14s";
//    }else if (mdim > 30){
//        candy.style.transition = "top 15s";
//    } else if (mdim > 20){
//        candy.style.transition = "top 16s";
//    }else {
//        candy.style.transition = "top 17s";
//    }
//    
//    setTimeout(function(){
//        candy.style.top = "55%";
//        
//        setTimeout (function(){
//            dispDiv.removeChild(candy);
//        },10000);
//    },10); 
//    
//}
//
//function makeItRainTrice(){
//    
//  var candy = document.createElement("img");
//    var mleft = Math.round(Math.random()*100);
//    var mdim = Math.round(Math.random()*40)+10;
//    
//    candy.src = "svgs/banana.svg";
//    candy.className = "candies";
//    candy.style.left = mleft+"%";
//    candy.style.height = mdim+"px";
//    candy.style.width = mdim+"px";
//    
//    dispDiv.appendChild(candy);
//    
//    if(mdim > 40){
//        candy.style.transition = "top 9s";
//    }else if (mdim > 30){
//        candy.style.transition = "top 10s";
//    } else if (mdim > 20){
//        candy.style.transition = "top 11s";
//    }else {
//        candy.style.transition = "top 12s";
//    }
//    
//    setTimeout(function(){
//        candy.style.top = "55%";
//        
//        setTimeout (function(){
//            dispDiv.removeChild(candy);
//        },10000);
//    },10); 
//    
//}
//
//function makeItRainFour(){
//    
//  var candy = document.createElement("img");
//    var mleft = Math.round(Math.random()*100);
//    var mdim = Math.round(Math.random()*40)+10;
//    
//    candy.src = "svgs/box.svg";
//    candy.className = "candies";
//    candy.style.left = mleft+"%";
//    candy.style.height = mdim+"px";
//    candy.style.width = mdim+"px";
//    
//    dispDiv.appendChild(candy);
//    
//    if(mdim > 40){
//        candy.style.transition = "top 10s";
//    }else if (mdim > 30){
//        candy.style.transition = "top 11s";
//    } else if (mdim > 20){
//        candy.style.transition = "top 12s";
//    }else {
//        candy.style.transition = "top 13s";
//    }
//    
//    setTimeout(function(){
//        candy.style.top = "55%";
//        
//        setTimeout (function(){
//            dispDiv.removeChild(candy);
//        },10000);
//    },10); 
//    
//}
//
//function notEnoughCandy(){
//    makeItRain();
//    makeItRainTwice();
//    makeItRainTrice();
//    makeItRainFour();
//}
//
//
//var timer = null;
//document.getElementById("start").addEventListener("click", function() {
//
// timer = setInterval(notEnoughCandy, 500);   
//    
//notEnoughCandy();
//    
//});
//
//
//document.getElementById("stop").addEventListener("click", function(){
//    clearInterval(timer);
//});
