//RENDERING ALL VARIABLES
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

var score = 0;
var timer = 90;


function RenderAll() {
	this.FixCanvasRes();
	this.DrawScore();
	this.CreateRoundedRectangle();
	this.CountdownTime();
}

function FixCanvasRes()
{
	game_canvas.width = 1000; //horizontal resolution (?) - increase for better looking text
	game_canvas.height = 500; //vertical resolution (?) - increase for better looking text
	game_canvas.style.width = width; //actual width of canvas
	game_canvas.style.height = height; //actual height of canvas
}

function DrawScore() {
	ctx.font = '500 20pt Courier New';
	ctx.fillStyle = "white";
	ctx.fillText('Score: ', 20, 40);
	ctx.fillText(score, 120, 40);
}

function DrawTime(myTimer) {
	//alert("in timer");
	ctx.font = '500 20pt Courier New';
	ctx.fillStyle = "white";
	ctx.fillText('Time: ', 850, 40);
	ctx.fillText(myTimer, 940, 40);
	
}

//need to fix timer
function CountdownTime()
{
	//alert("In function");
    var sec = timer;
	DrawTime(sec);
    var mytimer = setInterval(function CountdownTime(){
        //document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
		timer = sec;
		ctx.clearRect(940, 20, 40, 20);
		DrawTime(timer);
        if (sec < 0) {
			sec = 5;
			alert("Seconds is 0");
            clearInterval(timer);
        }
    }, 1000);
	
}
function ChangeScore(newNumber)
{
	score = newNumber;
}

function UpdateFrame() {
	//calculate the current frame
	currentFrame = ++currentFrame % cols;

	//update the current frame
	srcX = currentFrame * width;
	srcY = trackRight * height;

	//clear the renderer
	ctx.clearRect(x, y, width, height);
}

function CreateRoundedRectangle()
{
	RoundRect(10,10,980,480,20);
}

function RoundRect(x, y, w, h, radius)
{
  var r = x + w;
  var b = y + h;
  ctx.beginPath();
  ctx.strokeStyle="white";
  ctx.lineWidth="2";
  ctx.moveTo(x+radius, y);
  ctx.lineTo(r-radius, y);
  ctx.quadraticCurveTo(r, y, r, y+radius);
  ctx.lineTo(r, y+h-radius);
  ctx.quadraticCurveTo(r, b, r-radius, b);
  ctx.lineTo(x+radius, b);
  ctx.quadraticCurveTo(x, b, x, b-radius);
  ctx.lineTo(x, y+radius);
  ctx.quadraticCurveTo(x, y, x+radius, y);
  ctx.stroke();
}

function DrawImage() {
	//updater and render image
	var character = new Image();
	character.src = "images/character.png";
	updateFrame();
	character.onload = function () {
		character.width = width * 0.4;
		character.height = height * 0.4;
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(character, srcX, srcY, width, height, x, y, character.width, character.height);

	}
	//ctx.drawImage(character, 0, 0, game_canvas.width, game_canvas.height);
}
