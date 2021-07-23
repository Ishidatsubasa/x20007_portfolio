var redBtn = document.getElementById("red-button");
var greenBtn = document.getElementById("green-button");
var blueBtn = document.getElementById("blue-button");
var yellowBtn = document.getElementById("yellow-button");
var cyanBtn = document.getElementById("cyan-button");
var magentaBtn = document.getElementById("magenta-button");

var h1 = document.getElementById("change-target");

redBtn.addEventListener("click", function(){
    h1.style.color = "#ff0000";
});
greenBtn.addEventListener("click", function(){
    h1.style.color = "#00ff00";
});
blueBtn.addEventListener("click", function(){
    h1.style.color = "#0000ff";
});
yellowBtn.addEventListener("click", function(){
    h1.style.color = "#ffff00";
});
cyanBtn.addEventListener("click", function(){
    h1.style.color = "#00ffff";
});
magentaBtn.addEventListener("click", function(){
    h1.style.color = "#ff00ff";
});
