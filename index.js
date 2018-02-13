var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var ch3 = document.getElementById("ch3");
var zoomwidth = 100;
var zoomheight = 70;
var img1 = 0
var img2 = 0
var img3 = 0
var bg = "";
document.getElementById("bg1").addEventListener("click", function(){

    ch1.style.backgroundImage = "url(i1.jpg)";
	ch2.style.backgroundImage = "url(i2.jpg)";
	ch3.style.backgroundImage = "url(i3.jpg)";
    
    ch1.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url(i1.jpg)";
        
    });
    ch2.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url(i2.jpg)";
        
        
    });
    ch3.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url(i3.jpg)";
       
    });
});
document.getElementById("bg2").addEventListener("click", function(){

    ch1.style.backgroundImage = "url(i1.jpg)";
	ch2.style.backgroundImage = "url(i2.jpg)";
	ch3.style.backgroundImage = "url(i3.jpg)";
    
    ch1.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url(i1.jpg)";
     
    });
    ch2.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage ="url(i2.jpg)";
     
    });
    ch3.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url(i3.jpg)";
    
    });
});
document.getElementById("bg3").addEventListener("click", function(){

    ch1.style.backgroundImage = "url(i1.jpg)";
	ch2.style.backgroundImage = "url(i2.jpg)";
	ch3.style.backgroundImage = "url(i3.jpg)";

    ch1.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url(i1.jpg)";
 
    });
    ch2.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url(i2.jpg)";
  
    });
    ch3.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url(i3.jpg)";
      
    });
});
document.getElementById("bg4").addEventListener("click", function(){

	ch1.style.backgroundImage = "url(i1.jpg)";
	ch2.style.backgroundImage = "url(i2.jpg)";
	ch3.style.backgroundImage = "url(i3.jpg)";
    
    ch1.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url(i1.jpg)";
  
    });
    ch2.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url(i2.jpg)";
 
    });
    ch3.addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url(i3.jpg)";
      
    });
});

document.getElementById("plus").addEventListener("click", function(){
    zoomwidth = zoomwidth + 10;
    zoomheight = zoomheight + 7;
    document.getElementById("zoom").style.width = zoomwidth+"%";
    document.getElementById("zoom").style.height = zoomheight+"%";
});
document.getElementById("minus").addEventListener("click", function(){
    zoomwidth = zoomwidth - 10;
    zoomheight = zoomheight - 7;
    document.getElementById("zoom").style.width = zoomwidth+"%";
    document.getElementById("zoom").style.height = zoomheight+"%";
});
document.getElementById("zoom").addEventListener("click", function(){
    document.getElementById("zoomcontrols").style.display = "block";
});

document.getElementById("previous").addEventListener("click", function(){
	
    img1 = img1 - 3;
	img2 = img2 - 3;
	img3 = img3 - 3;
	if (img1 < 1){
		img1 = 10;
	}
	if (img2 < 1){
		img2 = 11;
	}
	if (img3 < 1){
		img3 = 12;
	}
	ch1.style.backgroundImage = "url(i" + img1 + ".jpg)";
	ch2.style.backgroundImage = "url(i" + img2 + ".jpg)";
	ch3.style.backgroundImage = "url(i" + img3 + ".jpg)";
	
});

document.getElementById("next").addEventListener("click", function(){
	
	img1 = img1 + 3;
	img2 = img2 + 3;
	img3 = img3 + 3;
	if (img1 > 12){
		img1 = 1;
	}
	if (img2 > 12){
		img2 = 2;
	}
	if (img3 > 12){
		img3 = 3;
	}
	ch1.style.backgroundImage = "url(i" + img1 + ".jpg)";
	ch2.style.backgroundImage = "url(i" + img2 + ".jpg)";
	ch3.style.backgroundImage = "url(i" + img3 + ".jpg)";
	
});







