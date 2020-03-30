var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var score = 0;
var timer = 90;


function RenderAll() {
	//this.FixCanvasRes();
	this.CreateRoundedRectangle();
	this.DrawScore();
	this.CountdownTime();
	this.DrawPlayer();
	//this.DrawConstraint();
}

function DrawPlayer()
{
	var character = new Image();
	character.src = "images/character.png";
    character.onload = function () 
    {
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(character, 0, 0, 120, 120, 10, 550, character.width, character.height);
    }
}

function CreateRoundedRectangle() {
	RoundRect(10, 10, 980, 680, 20);
}

function RoundRect(x, y, w, h, radius) {
	var r = x + w;
	var b = y + h;
	ctx.beginPath();
	ctx.strokeStyle = "white";
	ctx.lineWidth = "2";
	ctx.moveTo(x + radius, y);
	ctx.lineTo(r - radius, y);
	ctx.quadraticCurveTo(r, y, r, y + radius);
	ctx.lineTo(r, y + h - radius);
	ctx.quadraticCurveTo(r, b, r - radius, b);
	ctx.lineTo(x + radius, b);
	ctx.quadraticCurveTo(x, b, x, b - radius);
	ctx.lineTo(x, y + radius);
	ctx.quadraticCurveTo(x, y, x + radius, y);
	ctx.stroke();
}

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