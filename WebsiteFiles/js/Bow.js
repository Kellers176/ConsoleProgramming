//I think i need to use css
layer2 = document.getElementById("myBowCanvas");
ctx2 = layer2.getContext("2d");

var x = 10;
var y = 660;

var cx = x + 0.5 * 120;
var cy = y + 0.5 * 120;

var angle = -25 ;

function RotateCanvas()
{
    var bow = new Image();
    bow.src = "images/bowAndHands.png";
    //rotate then move back to original position
    //this might need to be on an interval
    var mytimer = setInterval(function dothis(){
        //document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
		ctx2.translate(cx,cy);
        ctx2.rotate( (Math.PI / 180) * angle);
        ctx2.translate(-cx,-cy);
        
    }, 1000);
    ctx2.translate(cx,cy);
    ctx2.rotate( (Math.PI / 180) * angle);
    ctx2.translate(-cx,-cy);
    //draw
    bow.onload = function () 
    {
        bow.width = characterWidth;
        bow.height = characterHeight * 0.7;
        ctx2.imageSmoothingEnabled = true;
        ctx2.drawImage(bow, 0, 0, 120, 120, 10, 670, bow.width, bow.height);
        //ctx2.rotate(40);
    }


}