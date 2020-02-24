//I think i need to use css


var canvas2 = document.getElementById("myBowCanvas");
var ctx2 = canvas2.getContext("2d");

function RotateCanvas()
{
    //ctx.rotate(20 * Math.PI / 180);
    var bow = new Image();
    bow.src = "images/bowAndHands.png";
    bow.onload = function () 
    {
        ctx2.drawImage(bow, 0, 0, 120, 120, 0, 0, 200, 120);
       
    }
}