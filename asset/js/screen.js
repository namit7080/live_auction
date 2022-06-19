var b = window.innerWidth;
var a = window.innerHeight;
console.log(a+" &&"+b);
if(a<650||b<1100){
    window.location = "/blocked";
 }
window.addEventListener('resize', function(){
    a = window.screen.height;
    b = window.screen.width;
    console.log(a+" "+b);
    if(a<650||b<1100){
       window.location = "/blocked";
    }
   
   
 });

 window.onresize = resize;

function resize()
{
 console("resize event detected!");
}
