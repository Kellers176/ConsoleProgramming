var game_canvas = document.getElementById("myCanvas");
var ctx = game_canvas.getContext("2d");

var width = 120;
var height = 120;

var TargetpositionX = 700;
var TargetpositionY = 550;


var Target = new Object();
Target.radius = 100;
Target.x = 700;
Target.y = 550;


function DrawTarget()
{
	var target = new Image();
	target.src = "images/target.png";
    target.onload = function () {
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(target, 0, 0, width, height, Target.x, Target.y, target.width, target.height);
    }
}

function Respawn()
{
	ctx2.clearRect(Target.x, Target.y, 120, 120);
	Target.x = Math.floor(Math.random() * 700) + 50;
	Target.y = Math.floor(Math.random() * 600) ;
	
}