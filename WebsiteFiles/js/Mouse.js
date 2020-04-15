var mousePosX = 0;
var mousePosY = 0;
var thisAngle = 0;
var finalAngle = 0;

//this will need to be the buffer size
var buffer = 200;

var game_canvas = document.getElementById("myCanvas");
var ctx = game_canvas.getContext("2d");
    

function GetMouseCoords()
{
	window.addEventListener('mousemove', function (e){
			//console.log('x: ' + e.x + ' y: ' + e.y);			   
			mousePosX = e.x - buffer;
			mousePosY = e.y;
		console.log('x: ' + mousePosX + ' y: ' + mousePosY);
        GetAngleOfMouse(mousePosX, mousePosY);
	});
	
	
}

function GetAngleOfMouse(x,y)
{
    //this is not transfering over
    //position of bow
    thisAngle = CalculateAngle(10, 670, x, y);
    finalAngle = Math.round(thisAngle);
	angle = finalAngle;
    console.log('MouseAngle: ' + finalAngle);	
}

function CalculateAngle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  //if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}