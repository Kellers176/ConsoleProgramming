var x = 0;
var y = 0;
	
var srcX;
var srcY;
	
var sheetWidth = 864;
var sheetHeight = 582;
	
var cols = 8;
var rows = 8;
	
var width = sheetWidth / cols;
var height = sheetHeight / rows;

var game_canvas = document.getElementById("myCanvas");
var ctx = game_canvas.getContext("2d");


function SetBackground()
{
	//document.getElementById("myCanvas").style.background = "url('images/environment.jpg')";
	var background = new Image();
	background.src = "images/environment.jpg";
	background.onload = function() {
		game_canvas.width = background.width;
  		game_canvas.height = background.height;
		ctx.imageSmoothingEnabled = true;
    	ctx.drawImage(background, 0, 0, game_canvas.width, game_canvas.height);}
}

function updateFrame()
{

	var currentFrame = 0;
	currentFrame = ++currentFrame % cols; 
	
	srcX = currentFrame * width;
	srcY = 0;
	
}

function drawImage()
{
	var character = new Image();
	character.src = "character.png";

	updateFrame();
	ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}

setInterval(function()
{
	drawImage();
}, 100);
