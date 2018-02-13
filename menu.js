document.getElementById("open").addEventListener("click", function() {
    document.getElementById("menu").style.left = "0px";
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("menu").style.left = "-110px";
});

document.getElementById("makebg").addEventListener("click", function() {
    document.getElementById("bg").style.backgroundImage = "url(i" + img + ".jpg)";
});
    
document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = "none";
});

document.getElementById("showapp").addEventListener("click", function(){
    document.getElementById("app1").style.display = "block";
});

document.getElementById("hideapp").addEventListener("click", function(){
    document.getElementById("app1").style.display = "none";
});
