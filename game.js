var howard = document.getElementById("howard"),
    clowds = document.getElementById("clowds"),
    baloon5 = document.getElementById("baloon5"),
    baloonAlert = document.getElementById("baloonAlert"),
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
    pts = document.getElementById("pts");;


//intro balloon
baloon5.style.display = "block";

baloon5.addEventListener("click", function(){
    baloon5.style.display = "none";
});

//reset
myreset.addEventListener("click", function(){
    location.reload();
});

//clowds

//clowds.addEventListener("mouseenter", function(){
//    function float(){
//
//    
//setTimeout(function(){
//   clowds.style.left = "100%";
//}, 50); 
//    }
//    setInterval(float, 300);
//});
var num =-100;

setInterval(function(){
    clowds.style.left = num+"%";
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

//matching items to bin
bottle.addEventListener("click", function(){
   takeItem(this);
    itemName = blueBin;
});

box.addEventListener("click", function(){
   takeItem(this);
    itemName = greenBin;
});

paper.addEventListener("click", function(){
   takeItem(this);
    itemName = yellowBin;
});

//change jam for smt else later
jam.addEventListener("click", function(){
   takeItem(this);
    itemName = blackBin;
});


banana.addEventListener("click", function(){
   takeItem(this);
    itemName = greenBin;
});

document.body.addEventListener("mousemove", function(ev){
        cursor.style.left = ev.pageX-45+"px";
        cursor.style.top = ev.pageY-45+"px"; 
        
});


//matching bin
var trashSound = new Audio('audio/trashSound.mp3');

function pickBin(bname){
    if(itemName == bname){
        cursor.style.display = "none";
        points++;
        console.log(points);
        baloonWin.style.display = "block";
        pts.value = points;
        disposingGarb();
        trashSound.play();
        trashSound.volume = 0.3;
        
            function disposingGarb(){    
            bname.style.transform = "scale(1.5)";
                
            setTimeout(function() {
                bname.style.transform = "scale(1)";
            }, 250);
            }

        
    } else {
        noPts++;
    }
    
    if (noPts > 5){
        baloonAlert.style.display = "block";
    }

}

//baloonAlert
baloonAlert.addEventListener("click", function(){
    baloonAlert.style.display = "none";
});
//pts balloon
baloonWin.addEventListener("click", function(){
    baloonWin.style.display = "none";
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
        howard.style.left = ev.pageX-120+"px";
        howard.style.top = ev.pageY-150+"px";  
});          
});
    


// garbage rain

var dispDiv = document.getElementById("wrap"),
    start = document.getElementById("start"),
    stop = document.getElementById("stop");


function makeItRain(){
    
  var candy = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*40)+10;
    
    candy.src = "svgs/paper.svg";
    candy.className = "candies";
    candy.style.left = mleft+"%";
    candy.style.height = mdim+"px";
    candy.style.width = mdim+"px";
    
    dispDiv.appendChild(candy);
    
    if(mdim > 40){
        candy.style.transition = "top 10s";
    }else if (mdim > 30){
        candy.style.transition = "top 11s";
    } else if (mdim > 20){
        candy.style.transition = "top 12s";
    }else {
        candy.style.transition = "top 13s";
    }
    
    setTimeout(function(){
        candy.style.top = "55%";
        
        setTimeout (function(){
            dispDiv.removeChild(candy);
        },10000);
    },10); 
    
}

function makeItRainTwice(){
    
  var candy = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*40)+10;
    
    candy.src = "svgs/bottle.svg";
    candy.className = "candies";
    candy.style.left = mleft+"%";
    candy.style.height = mdim+"px";
    candy.style.width = mdim+"px";
    
    dispDiv.appendChild(candy);
    
    if(mdim > 40){
        candy.style.transition = "top 14s";
    }else if (mdim > 30){
        candy.style.transition = "top 15s";
    } else if (mdim > 20){
        candy.style.transition = "top 16s";
    }else {
        candy.style.transition = "top 17s";
    }
    
    setTimeout(function(){
        candy.style.top = "55%";
        
        setTimeout (function(){
            dispDiv.removeChild(candy);
        },10000);
    },10); 
    
}

function makeItRainTrice(){
    
  var candy = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*40)+10;
    
    candy.src = "svgs/banana.svg";
    candy.className = "candies";
    candy.style.left = mleft+"%";
    candy.style.height = mdim+"px";
    candy.style.width = mdim+"px";
    
    dispDiv.appendChild(candy);
    
    if(mdim > 40){
        candy.style.transition = "top 9s";
    }else if (mdim > 30){
        candy.style.transition = "top 10s";
    } else if (mdim > 20){
        candy.style.transition = "top 11s";
    }else {
        candy.style.transition = "top 12s";
    }
    
    setTimeout(function(){
        candy.style.top = "55%";
        
        setTimeout (function(){
            dispDiv.removeChild(candy);
        },10000);
    },10); 
    
}

function makeItRainFour(){
    
  var candy = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*40)+10;
    
    candy.src = "svgs/box.svg";
    candy.className = "candies";
    candy.style.left = mleft+"%";
    candy.style.height = mdim+"px";
    candy.style.width = mdim+"px";
    
    dispDiv.appendChild(candy);
    
    if(mdim > 40){
        candy.style.transition = "top 10s";
    }else if (mdim > 30){
        candy.style.transition = "top 11s";
    } else if (mdim > 20){
        candy.style.transition = "top 12s";
    }else {
        candy.style.transition = "top 13s";
    }
    
    setTimeout(function(){
        candy.style.top = "55%";
        
        setTimeout (function(){
            dispDiv.removeChild(candy);
        },10000);
    },10); 
    
}

function notEnoughCandy(){
    makeItRain();
    makeItRainTwice();
    makeItRainTrice();
    makeItRainFour();
}


var timer = null;
document.getElementById("start").addEventListener("click", function() {

 timer = setInterval(notEnoughCandy, 500);   
    
notEnoughCandy();
    
});


document.getElementById("stop").addEventListener("click", function(){
    clearInterval(timer);
});
