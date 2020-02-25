//-----------------------------------------------------------------------------------------
//variables
var width = 120;
var height = 120;

var positionX = 10;
var positionY = 300;

//reference the game canvas
var game_canvas = document.getElementById("myCanvas");
var ctx = game_canvas.getContext("2d");
//the player character

var score = 0;
var timer = 90;

//-----------------------------------------------------------------------------------------
//Render Function
function RenderAll() {
	this.FixCanvasRes();
	this.DrawScore();
	this.CreateRoundedRectangle();
	this.CountdownTime();
	this.DrawConstraint();
}

//-----------------------------------------------------------------------------------------
//Draw Objects
//Draw the Score
function DrawScore() {
	ctx.font = '500 20pt Courier New';
	ctx.fillStyle = "white";
	ctx.fillText('Score: ', 20, 40);
	ctx.fillText(score, 120, 40);
}
//Draw the time 
function DrawTime(myTimer) {
	//alert("in timer");
	ctx.font = '500 20pt Courier New';
	ctx.fillStyle = "white";
	ctx.fillText('Time: ', 850, 40);
	ctx.fillText(myTimer, 940, 40);
	
}
//Create a rounded rectangle around the play space
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

//Draw the constraing circle around the player
function DrawConstraint()
{
	var constraint = new Image();
	constraint.src = "images/ring.png";
    constraint.onload = function () {
        constraint.width = width;
        constraint.height = height* 0.7;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(constraint, 0, 0, width, height, 20, 320, constraint.width * 2, constraint.height * 2);
    }
	
}

//-----------------------------------------------------------------------------------------
//Canvas stuff
function FixCanvasRes()
{
	game_canvas.width = 1000; //horizontal resolution (?) - increase for better looking text
	game_canvas.height = 500; //vertical resolution (?) - increase for better looking text
	game_canvas.style.width = width; //actual width of canvas
	game_canvas.style.height = height; //actual height of canvas
}

//-----------------------------------------------------------------------------------------
//Updates
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

