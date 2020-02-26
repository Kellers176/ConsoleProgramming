var mousePosX = 0;
var mousePosY = 0;
var thisAngle = 0;
var finalAngle = 0;

function GetMouseCoords()
{
	window.addEventListener('mousemove', function (e){
			//console.log('x: ' + e.x + ' y: ' + e.y);			   
			mousePosX = e.x;
			mousePosY = e.y;
		//console.log('x: ' + mousePosX + ' y: ' + mousePosY);
        GetAngleOfMouse(mousePosX, mousePosY);
	});
	
	
}

function GetAngleOfMouse(x,y)
{
    //this is not transfering over
    //position of bow
    thisAngle = CalculateAngle(10, 670, x, y);
    finalAngle = Math.round(thisAngle);
    console.log('Angle: ' + finalAngle);			   
}

function CalculateAngle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  //if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}