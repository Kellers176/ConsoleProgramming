var mousePosX = 0;
var mousePosY = 0;


function GetMouseCoords()
{
	window.addEventListener('mousemove', function (e){
			console.log('x: ' + e.x + ' y: ' + e.y);			   
			mousePosX = e.x;
			mousePosY = e.y;
		
	});
	
	
}