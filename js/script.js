// bulb script
function off(){
    document.getElementById('ima').src = 'img/pic_bulboff.gif';
}
function on(){
    document.getElementById('ima').src='img/pic_bulbon.gif';
}
document.getElementById("bulbOff").addEventListener("click",off);
document.getElementById("bulbOn").addEventListener("click",on);

// -------------Single button bulb -----------------
var a = document.getElementById("blb")
var s = document.getElementById("btn");
function amit(){
   
    if(s.value === "ON"){
        a.src = "img/pic_bulbon.gif";
        s.value = "OFF";
    }
    else if(s.value=== "OFF"){
        a.src = "img/pic_bulboff.gif";
        s.value = "ON";
    }
}
s.addEventListener("click",amit);