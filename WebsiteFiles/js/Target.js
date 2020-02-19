//this will be the class for the target spawning


var game_canvas = document.getElementById("myCanvas");
var ctx = game_canvas.getContext("2d");

var width = 120;
var height = 120;

var positionX = 700;
var positionY = 50;


function DrawTarget()
{
    var target = new Image();
	target.src = "images/target.png";
    target.onload = function () {
        target.width = width;
        target.height = height * 0.7;
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(target, 0, 0, width, height, positionX, positionY, target.width, target.height);
    }
}

function RespawnTarget()
{
    
    
}

function CalculateArrowPos()
{
    
    
}
