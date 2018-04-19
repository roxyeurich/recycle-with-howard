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

//form
var quantity = document.getElementById("quantity");
var calcPrice = new Array();

calcPrice["p2l"] = 0.20;
calcPrice["p1l"] = 0.15;
calcPrice["cans"] = 0.10;
calcPrice["pg2l"] = 0.30;
calcPrice["g1l"] = 0.25;

function bottlePrice(){
    var bottlePrice = 0;
    var theForm = document.forms["bprices"];
    var selectedBottle = theForm.element["selectedbottle"];
    bottlePrice = calPrice[selectedBottle[i].value];
    return bottlePrice;
}

function quantityBottles(){
    quantityBottles.value = bottlePrice*(quantity.value);
}

function calculateTotal(){
    var totPrice = quantityBottles();
    

    var finalNum = document.getElementById('totalPrice');
    finalNum.style.display='block';
    finalNum.innerHTML = "Total Price For the Bottles $"+totPrice;
}