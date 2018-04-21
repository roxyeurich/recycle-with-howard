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

//form
var quantity = document.getElementById("quantity");
var calcPrice = new Array();
var bprices = document.getElementById("bprices");

//price values
calcPrice["p2l"] = 0.20;
calcPrice["p1l"] = 0.15;
calcPrice["cans"] = 0.10;
calcPrice["pg2l"] = 0.30;
calcPrice["g1l"] = 0.25;

function bottlePrice(){
    var bottlePrice = 0;
    var theForm = document.getElementById("bprices");
    var selectedBottle = document.getElementById("selectedbottle");
    bottlePrice = calPrice[selectedBottle[i].value];
    
}

//multiply value and show result
mysubmit.addEventListener("click", function(){
    
function quantityBottles(){
    
    var finalNum = document.getElementById('totalPrice');
    console.log(calcTotal);
    finalNum.style.display='block';
    finalNum.innerHTML = "Total Price For the Bottles $"+(bottlePrice()*(quantity.value));
}
 
});