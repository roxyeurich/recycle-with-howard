var howard = document.getElementById("howard"),
    clouds = document.getElementById("clouds"),
    balloon5 = document.getElementById("balloon5"),
    mysubmit = document.getElementById("mysubmit");


//clouds
var num =-100;

setInterval(function(){
    clouds.style.left = num+"%";
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
    
    var CalcOne = Math.round((p2lCalc+p1lCalc+cansCalc+g2lCalc+g1lCalc)*100)/100;
   var Calculation = CalcOne.toFixed(2);
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

//bottle and can icons 
//first input
var icon11 = document.getElementById("icon11"),
    icon12 = document.getElementById("icon12"),
    icon13 = document.getElementById("icon13"),
    icon14 = document.getElementById("icon14"),
    icon15 = document.getElementById("icon15");

document.addEventListener("change", function(){
if(p2l.value == 0){
    icon11.style.opacity = "0";
    icon12.style.opacity = "0";
    icon13.style.opacity = "0";
    icon14.style.opacity = "0";
    icon15.style.opacity = "0";
} else if (p2l.value == 1){
    icon11.style.opacity = "1";
    icon12.style.opacity = "0";
    icon13.style.opacity = "0";
    icon14.style.opacity = "0";
    icon15.style.opacity = "0";
} else if (p2l.value == 2){
    icon11.style.opacity = "1";
    icon12.style.opacity = "1";
    icon13.style.opacity = "0";
    icon14.style.opacity = "0";
    icon15.style.opacity = "0";
} else if (p2l.value == 3){
    icon11.style.opacity = "1";
    icon12.style.opacity = "1";
    icon13.style.opacity = "1";
    icon14.style.opacity = "0";
    icon15.style.opacity = "0";
} else if (p2l.value == 4){
    icon11.style.opacity = "1";
    icon12.style.opacity = "1";
    icon13.style.opacity = "1";
    icon14.style.opacity = "1";
    icon15.style.opacity = "0";
} else if (p2l.value == 5){
    icon11.style.opacity = "1";
    icon12.style.opacity = "1";
    icon13.style.opacity = "1";
    icon14.style.opacity = "1";
    icon15.style.opacity = "1";
}
                      
});

//second input
var icon21 = document.getElementById("icon21"),
    icon22 = document.getElementById("icon22"),
    icon23 = document.getElementById("icon23"),
    icon24 = document.getElementById("icon24"),
    icon25 = document.getElementById("icon25");

document.addEventListener("change", function(){
if(p1l.value == 0){
    icon21.style.opacity = "0";
    icon22.style.opacity = "0";
    icon23.style.opacity = "0";
    icon24.style.opacity = "0";
    icon25.style.opacity = "0";
} else if (p1l.value == 1){
    icon21.style.opacity = "1";
    icon22.style.opacity = "0";
    icon23.style.opacity = "0";
    icon24.style.opacity = "0";
    icon25.style.opacity = "0";
} else if (p1l.value == 2){
    icon21.style.opacity = "1";
    icon22.style.opacity = "1";
    icon23.style.opacity = "0";
    icon24.style.opacity = "0";
    icon25.style.opacity = "0";
} else if (p2l.value == 3){
    icon21.style.opacity = "1";
    icon22.style.opacity = "1";
    icon23.style.opacity = "1";
    icon24.style.opacity = "0";
    icon25.style.opacity = "0";
} else if (p1l.value == 4){
    icon21.style.opacity = "1";
    icon22.style.opacity = "1";
    icon23.style.opacity = "1";
    icon24.style.opacity = "1";
    icon25.style.opacity = "0";
} else if (p1l.value == 5){
    icon21.style.opacity = "1";
    icon22.style.opacity = "1";
    icon23.style.opacity = "1";
    icon24.style.opacity = "1";
    icon25.style.opacity = "1";
}
                      
});

//third input
var icon31 = document.getElementById("icon31"),
    icon32 = document.getElementById("icon32"),
    icon33 = document.getElementById("icon33"),
    icon34 = document.getElementById("icon34"),
    icon35 = document.getElementById("icon35");

document.addEventListener("change", function(){
if(cans.value == 0){
    icon31.style.opacity = "0";
    icon32.style.opacity = "0";
    icon33.style.opacity = "0";
    icon34.style.opacity = "0";
    icon35.style.opacity = "0";
} else if (cans.value == 1){
    icon31.style.opacity = "1";
    icon32.style.opacity = "0";
    icon33.style.opacity = "0";
    icon34.style.opacity = "0";
    icon35.style.opacity = "0";
} else if (cans.value == 2){
    icon31.style.opacity = "1";
    icon32.style.opacity = "1";
    icon33.style.opacity = "0";
    icon34.style.opacity = "0";
    icon35.style.opacity = "0";
} else if (cans.value == 3){
    icon31.style.opacity = "1";
    icon32.style.opacity = "1";
    icon33.style.opacity = "1";
    icon34.style.opacity = "0";
    icon35.style.opacity = "0";
} else if (cans.value == 4){
    icon31.style.opacity = "1";
    icon32.style.opacity = "1";
    icon33.style.opacity = "1";
    icon34.style.opacity = "1";
    icon35.style.opacity = "0";
} else if (cans.value == 5){
    icon31.style.opacity = "1";
    icon32.style.opacity = "1";
    icon33.style.opacity = "1";
    icon34.style.opacity = "1";
    icon35.style.opacity = "1";
}
                      
});

//fourth input
var icon41 = document.getElementById("icon41"),
    icon42 = document.getElementById("icon42"),
    icon43 = document.getElementById("icon43"),
    icon34 = document.getElementById("icon44"),
    icon45 = document.getElementById("icon45");

document.addEventListener("change", function(){
if(g2l.value == 0){
    icon41.style.opacity = "0";
    icon42.style.opacity = "0";
    icon43.style.opacity = "0";
    icon44.style.opacity = "0";
    icon45.style.opacity = "0";
} else if (g2l.value == 1){
    icon41.style.opacity = "1";
    icon42.style.opacity = "0";
    icon43.style.opacity = "0";
    icon44.style.opacity = "0";
    icon45.style.opacity = "0";
} else if (g2l.value == 2){
    icon41.style.opacity = "1";
    icon42.style.opacity = "1";
    icon43.style.opacity = "0";
    icon44.style.opacity = "0";
    icon45.style.opacity = "0";
} else if (g2l.value == 3){
    icon41.style.opacity = "1";
    icon42.style.opacity = "1";
    icon43.style.opacity = "1";
    icon44.style.opacity = "0";
    icon45.style.opacity = "0";
} else if (g2l.value == 4){
    icon41.style.opacity = "1";
    icon42.style.opacity = "1";
    icon43.style.opacity = "1";
    icon44.style.opacity = "1";
    icon45.style.opacity = "0";
} else if (g2l.value == 5){
    icon41.style.opacity = "1";
    icon42.style.opacity = "1";
    icon43.style.opacity = "1";
    icon44.style.opacity = "1";
    icon45.style.opacity = "1";
}
                      
});

//fifth input
var icon51 = document.getElementById("icon51"),
    icon52 = document.getElementById("icon52"),
    icon53 = document.getElementById("icon53"),
    icon54 = document.getElementById("icon54"),
    icon55 = document.getElementById("icon55");

document.addEventListener("change", function(){
if(g1l.value == 0){
    icon51.style.opacity = "0";
    icon52.style.opacity = "0";
    icon53.style.opacity = "0";
    icon54.style.opacity = "0";
    icon55.style.opacity = "0";
} else if (g1l.value == 1){
    icon51.style.opacity = "1";
    icon52.style.opacity = "0";
    icon53.style.opacity = "0";
    icon54.style.opacity = "0";
    icon55.style.opacity = "0";
} else if (g1l.value == 2){
    icon51.style.opacity = "1";
    icon52.style.opacity = "1";
    icon53.style.opacity = "0";
    icon54.style.opacity = "0";
    icon55.style.opacity = "0";
} else if (g1l.value == 3){
    icon51.style.opacity = "1";
    icon52.style.opacity = "1";
    icon53.style.opacity = "1";
    icon54.style.opacity = "0";
    icon55.style.opacity = "0";
} else if (g1l.value == 4){
    icon51.style.opacity = "1";
    icon52.style.opacity = "1";
    icon53.style.opacity = "1";
    icon54.style.opacity = "1";
    icon55.style.opacity = "0";
} else if (g1l.value == 5){
    icon51.style.opacity = "1";
    icon52.style.opacity = "1";
    icon53.style.opacity = "1";
    icon54.style.opacity = "1";
    icon55.style.opacity = "1";
}
                      
});