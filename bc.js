var howard = document.getElementById("howard"),
    clowds = document.getElementById("clowds"),
    baloon5 = document.getElementById("baloon5"),
    mysubmit = document.getElementById("mysubmit");


//clowds
var num =-100;

setInterval(function(){
    clowds.style.left = num+"%";
    num=num+0.2;
    if(num>100){
        num = -100;
    }
},30);

//pig function

function MakeItFat1(){       
    piggy.style.transform = "scale(1.6)";
            
    setTimeout(function() {
        piggy.style.transform = "scale(1.2)";
    }, 250);
    
   };

function MakeItFat2(){       
    piggy.style.transform = "scale(2)";
            
    setTimeout(function() {
        piggy.style.transform = "scale(1.5)";
    }, 250);
    
   };

function MakeItFat3(){       
    piggy.style.transform = "scale(3)";
            
    setTimeout(function() {
        piggy.style.transform = "scale(1.8)";
    }, 250);
    
   };

//form

var p2l = document.getElementById("p2l"),
    p1l = document.getElementById("p1l"),
    cans = document.getElementById("cans"),
    g2l = document.getElementById("g2l"),
    g1l = document.getElementById("g1l"),
    mysubmit = document.getElementById("mysubmit"),
    tPrice = document.getElementById("totalPrice"),
    piggy = document.getElementById("piggy");



mysubmit.addEventListener("click", function(){
    
    var p2lCalc = (p2l.value)*(0.20);
    var p1lCalc = (p1l.value)*(0.15);
    var cansCalc = (cans.value)*(0.10);
    var g2lCalc = (g2l.value)*(0.30);
    var g1lCalc = (g1l.value)*(0.25);
    
    var Calculation = Math.round((p2lCalc+p1lCalc+cansCalc+g2lCalc+g1lCalc)*100)/100;
    tPrice.value = Calculation;
    
    
    if(tPrice.value < 2){
      MakeItFat1();  
    } else if(tPrice.value >= 2){
      MakeItFat2();  
    } else if(tPrice.value > 5){
      MakeItFat3();  
    } 
    
   var chaching = new Audio('audio/chaching.mp3');

    chaching.play();
    chaching.volume = 0.2;
});