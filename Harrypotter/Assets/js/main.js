// var prevScrollpos = window.pageYOffset
// window.scrollBy(100,100);
// console.log( window.pageXOffset + window.pageYOffset); 
// Scroll
window.onscroll = function(){
    // console.log(window.pageYOffset);

    if(window.pageYOffset>200 && window.pageYOffset<700)
    {
        document.getElementById("header").style.top = "-100px";
        // alert(window.pageYOffset);

    }
    else{
        document.getElementById("header").style.top = "0px";
    }
}