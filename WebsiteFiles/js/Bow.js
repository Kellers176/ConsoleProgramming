//I think i need to use css
layer2 = document.getElementById("myBowCanvas");
            ctx2 = layer2.getContext("2d");
function RotateCanvas()
{
    //ctx2.rotate(20 * Math.PI / 180);
    var bow = new Image();
    bow.src = "images/bowAndHands.png";
   
    bow.onload = function () 
    {
        bow.width = characterWidth;
        bow.height = characterHeight * 0.7;
        ctx2.imageSmoothingEnabled = true;
        ctx2.drawImage(bow, 0, 0, 120, 120, 10, 670, bow.width, bow.height);
        //ctx2.rotate(40);
    }
}