var game_canvas = document.getElementById("myCanvas");
var ctx2 = game_canvas.getContext("2d");

var positionX = 10;
var positionY = 550;

var radius = 10;
var colliding = false;

var Arrow = new Object();
Arrow.x = positionX;
Arrow.y = positionY;

function DrawArrow() {

	var arrow = new Image();
	arrow.src = "images/arrow.png";
	
	//draw
	arrow.onload = function () {
		ctx2.imageSmoothingEnabled = true;
		ctx2.save();
		ctx2.translate(cx, cy);
		ctx2.rotate((Math.PI / 180) * angle);
		ctx2.translate(-cx, -cy);
		ctx2.drawImage(arrow, 0, 0, 120, 120, Arrow.x, Arrow.y, arrow.width, arrow.height);
		ctx2.restore();

	}
}

function ClearArea()
{
	ctx2.save();
		ctx2.translate(cx, cy);
		ctx2.rotate((Math.PI / 180) * angle);
		ctx2.translate(-cx, -cy);
	ctx2.clearRect(Arrow.x, Arrow.y, 150, 150);
	ctx2.restore();
}

function ShootArrow() {
	var temp = setInterval(function ShootArrow() {
		//document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
		Arrow.x = Arrow.x + 5;
		DrawArrow();
		ClearArea();
		DrawPlayer();
		DrawTarget();
		DrawBow();
		CheckCollision();
		console.log(colliding);
		if (colliding) {
			ChangeScore(10);
			colliding = false;
			clearInterval(temp);
			//alert("colliding!");
		}
		
	}, 10);

}

function CheckCollision() {
	collision(this, Target);
}

function collision(obj1, obj2) {
	var distance = distance_between(obj1, obj2);
	var totalRadius = (obj1.radius + obj2.radius);
	if (distance < totalRadius) {
		colliding = true;
		return true;
	} else {
		colliding = false;
		return false;
	}
}

function distance_between(obj1, obj2) {
	return Math.sqrt(Math.pow(obj1.positionX - obj2.x, 2) +
		Math.pow(obj1.positionY - obj2.y, 2));
}
