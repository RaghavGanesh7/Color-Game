var num=6;
var colors=generatreColors(num);
var square=document.querySelectorAll(".square");
var picked=pickColor();
var message=document.querySelector("#message");
var display=document.querySelector(".colorDisplay");
display.textContent=picked.toUpperCase();
var heading=document.querySelector("#h1");
var reset=document.querySelector(".reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
reset.addEventListener("click",function(){
        h1.style.background="#232323";
        colors=generatreColors(num);
        picked=pickColor();
        display.textContent=picked;
        message.textContent="";
        reset.textContent="New Colors";
        for(var i=0;i<square.length;i++)
{
    square[i].style.background=colors[i];
}
});
easy.addEventListener("click",function() {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    num=3;
     colors=generatreColors(num);
     picked=pickColor();
     display.textContent=picked;
     for (var i = 0; i < 6; i++) {
         if(colors[i]){
            square[i].style.background=colors[i];
         }
         else{
            square[i].style.background="none";
         }
     }
});
hard.addEventListener("click",function() {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    num=6;
    colors=generatreColors(num);
      picked=pickColor();
     display.textContent=picked;
    for (var i = 0; i < square.length; i++) {
            square[i].style.background=colors[i];
            square[i].style.background="block";
     }
})
for(var i=0;i<square.length;i++)
{
    square[i].style.background=colors[i];
    square[i].addEventListener("click",function(){
    var pickedOne=this.style.background;
    	if(pickedOne==picked)
    	{
    		changeColors(pickedOne);
    		message.textContent="Correct!";
    		h1.style.background=picked;
    		reset.textContent="Play Again."
    	}
    	else
    	{
            message.textContent="Try Again.";
    		this.style.background="#232323";
    	}
    });
}
function changeColors(color)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background=color;
	}
}
function pickColor(){
	var random=Math.floor((Math.random()*colors.length));
	return colors[random];
}
function generatreColors(num){
	var array=[];
	for (var i = 0; i < num; i++) {
		array[i]=randomColor();
		}
	return array;	
}
function randomColor()
{
 var r=Math.floor(Math.random()*256);
 var g=Math.floor(Math.random()*256);
 var b=Math.floor(Math.random()*256);
 return "rgb(" + r + ", " + g + ", " + b + ")";
}