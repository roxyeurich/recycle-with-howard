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
    redBin = document.getElementById("redBin"),
    blueBin = document.getElementById("blueBin"),
    yellowBin = document.getElementById("yellowBin"),
    cursor = document.getElementById("cursorChange"),
    myreset = document.getElementById("myreset");

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
var points =0;
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
    itemName = yellowBin;
});

box.addEventListener("click", function(){
   takeItem(this);
    itemName = greenBin;
});

paper.addEventListener("click", function(){
   takeItem(this);
    itemName = blueBin;
});

jam.addEventListener("click", function(){
   takeItem(this);
    itemName = redBin;
});


banana.addEventListener("click", function(){
   takeItem(this);
    itemName = greenBin;
});

document.body.addEventListener("mousemove", function(ev){
        cursor.style.left = ev.pageX-25+"px";
        cursor.style.top = ev.pageY-25+"px"; 
        
});


//matching bin
function pickBin(bname){
    if(itemName == bname){
        cursor.style.display = "none";
        points++;
        console.log(points);
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
//clickable bins
redBin.addEventListener("click", function(){
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
    
    

