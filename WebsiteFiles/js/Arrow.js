//This will be the arrow class for the player

var game_canvas = document.getElementById("myArrowCanvas");
var ctx3 = game_canvas.getContext("2d");

var width = 120;
var height = 120;

var positionY = 670;
var positionX = 10;

var angle = -15 ;

var notRotated = true;

function RotateArrow()
{
	//rotate then move back to original position
   	ctx3.translate(cx,cy);
    ctx3.rotate( (Math.PI / 180) * angle);
    ctx3.translate(-cx,-cy);
    ctx3.translate(cx,cy);
    ctx3.rotate( (Math.PI / 180) * angle);
    ctx3.translate(-cx,-cy);
	notRotated = false;
    //draw
}

function DrawArrow()
{
	
	if(notRotated)
	{
		RotateArrow();
	}
    var arrow = new Image();
    arrow.src = "images/arrow.png";
    //draw
    arrow.onload = function () 
    {
        arrow.width = characterWidth;
        arrow.height = characterHeight * 0.7;
        ctx3.imageSmoothingEnabled = true;
        ctx3.drawImage(arrow, 0, 0, 120, 120, positionX, positionY, arrow.width, arrow.height);
		Console.log(positionX);
        //ctx2.rotate(40);
    }
}

function ShootArrow()
{
    var temp = setInterval(function ShootArrow(){
        //document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
		positionX = positionX + 5;
		DrawArrow();
		ctx3.clearRect(positionX, positionY, 120, 120);
    }, 10);
	
}

function EffectOfWind(windDir)
{
    
}

function AngleOfArrow()
{
    
}


