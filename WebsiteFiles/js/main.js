//Global variables
//position fram will be drawn
var x = 0;
var y = 0;
//where the frame currently is
var srcX;
var srcY;
//Get the sheet width of the sprite sheet
var sheetWidth = 864;
var sheetHeight = 300;
//the amount of rows and columns of the sprite sheet
var cols = 8;
var rows = 2;
//how many frames in the sprite sheet
var frameCount = 8;
var currentFrame = 0;
//position the character is facing by changing the row
var trackLeft = 1;
var trackRight = 0;

//the width and the height of each sprite
var width = sheetWidth / cols;
var height = sheetHeight / rows;

//reference the game canvas
var game_canvas = document.getElementById("myCanvas");
var ctx = game_canvas.getContext("2d");
//the player character
var character = new Image();
character.src = "images/character.png";

function SetBackground()
{
	//document.getElementById("myCanvas").style.background = "url('images/environment.jpg')";
	//var background = new Image();
	//background.src = "images/environment.jpg";
	//background.onload = function() {
		//game_canvas.width = background.width;
  		//game_canvas.height = background.height;
		//ctx.imageSmoothingEnabled = true;
    	//ctx.drawImage(background, 0, 0, game_canvas.width, game_canvas.height);}
}

function updateFrame()
{
    //calculate the current frame
	currentFrame = ++currentFrame % cols; 
	
    //update the current frame
	srcX = currentFrame * width;
	srcY = trackRight * height;
    
    //clear the renderer
    ctx.clearRect(x,y,width, height);
	
}

function drawImage()
{
    //updater and render image
	updateFrame();
	ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}


