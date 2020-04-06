var game_canvas = document.getElementById("myCanvas");
var ctx2 = game_canvas.getContext("2d");

var bowX = 10;
var bowY = 550;

var cx = bowX + 0.5 * 120;
var cy = bowY + 0.5 * 120;

var angle = -25 ;

function DrawBow()
{
    var bow = new Image();
    bow.src = "Images/bowAndHands.png";
	
	
    //rotate then move back to original position
    //this might need to be on an interval
 //   var mytimer = setInterval(function dothis(){
        //document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
//		ctx2.translate(cx,cy);
//        ctx2.rotate( (Math.PI / 180) * angle);
//        ctx2.translate(-cx,-cy);
        
//    }, 1000);
//    ctx2.translate(cx,cy);
//    ctx2.rotate( (Math.PI / 180) * angle);
//    ctx2.translate(-cx,-cy);
    //draw
    bow.onload = function () 
    {
        ctx2.imageSmoothingEnabled = true;
        ctx2.drawImage(bow, 0, 0, 120, 120, bowX, bowY, bow.width, bow.height);
        //ctx2.rotate(40);
    }


}