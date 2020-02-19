//Player script

var game_canvas = document.getElementById("myCanvas");
var ctx = game_canvas.getContext("2d");



var characterWidth = 120;
var characterHeight = 120;

var bowWidth = 120;
var bowHeight = 120;

function DrawCharacter()
{
    var character = new Image();
	character.src = "images/character.png";
    character.onload = function () {
        character.width = characterWidth;
        character.height = characterHeight * 0.7;
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(character, 0, 0, 120, 120, 10, 400, character.width, character.height);
    }
} 

function DrawBow()
{
        var bow = new Image();
	    bow.src = "images/bowAndHands.png";
        bow.onload = function () {
        bow.width = bowWidth;
        bow.height = bowHeight * 0.7;
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(bow, 0, 0, bowWidth, bowHeight, 10, 400, bow.width, bow.height);
    }
}