window.addEventListener('load',initEvents)

var box;
var oprs;
var btns;
var calc;

function initEvents(){
    box = document.querySelector("#box_1");
    btns = document.querySelectorAll(".num");
    calc = document.querySelector(".calc");

    calc.addEventListener('click',calculate);
    for(var i=0;i<btns.length;i++){
       btns[i].addEventListener('click',appendValue); 
    }
    oprs = document.querySelectorAll(".opr");
    for(var i=0;i<oprs.length;i++){
        oprs[i].addEventListener('click',appendOperators); 
     }
}


function appendValue(){
    console.log('call');
    box.value += event.srcElement.innerHTML;
}

function appendOperators(){
    console.log('appendOperators call');
    var lastValue = box.value.charAt(box.value.length - 1);
    console.log(lastValue);
    for(var i=0;i<oprs.length;i++){
        console.log(oprs[i].innerHTML);
        if(oprs[i].innerHTML == lastValue){
            console.log("Operator already exist...");
            return;
        }
        
    }
    box.value += event.srcElement.innerHTML;
}

function calculate(){
    var expression = box.value;
    var result = eval(expression);
    box.value = result;
}