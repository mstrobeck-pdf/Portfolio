import * as utils from './utils.js';

let ctx,canvasWidth,canvasHeight,gradient,analyserNode,audioData;


function setupCanvas(canvasElement,analyserNodeRef){
	// create drawing context
	ctx = canvasElement.getContext("2d");
	canvasWidth = canvasElement.width;
	canvasHeight = canvasElement.height;
	// create a gradient that runs top to bottom
	gradient = utils.getLinearGradient(ctx,0,0,0,canvasHeight,[{percent:0,color:"HotPink"},{percent:.25,color:"Pink"},{percent:.5,color:"SkyBlue"},{percent:.75,color:"Pink"},{percent:1,color:"HotPink"}]);
	// keep a reference to the analyser node
	analyserNode = analyserNodeRef;
	// this is the array where the analyser data will be stored
	audioData = new Uint8Array(analyserNode.fftSize/2);
}

function drawSnowOnGroundLayerOne() {
    //draw snow on ground
    ctx.save();
    ctx.lineWidth = 3;

    ctx.globalAlpha = .9;
    ctx.beginPath();
    ctx.arc(25, 400, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "#F2F3F4";
    ctx.fillStyle = "#F7F9F9";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(100, 400, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "#F2F3F4";
    ctx.fillStyle = "#ECF0F1";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(175, 400, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "#F2F3F4";
    ctx.fillStyle = "#F7F9F9";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250, 400, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "#F2F3F4";
    ctx.fillStyle = "#ECF0F1";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(330, 400, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "#F2F3F4";
    ctx.fillStyle = "#F7F9F9";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(410, 400, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "#ECF0F1";
    ctx.fillStyle = "#ECF0F1";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(500, 400, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "#F7F9F9";
    ctx.fillStyle = "#F7F9F9";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "#ECF0F1";
    ctx.fillStyle = "#ECF0F1";
    ctx.arc(590, 400, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(680, 400, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "#F7F9F9";
    ctx.fillStyle = "#F7F9F9";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "#ECF0F1";
    ctx.fillStyle = "#ECF0F1";
    ctx.arc(760, 400, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
}

function drawSnowOnGroundLayerTwo() {
     //draw snow on ground
     ctx.save();
     ctx.lineWidth = 3;
     ctx.globalAlpha = .7;

     ctx.beginPath();
     ctx.arc(40, 350, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#ECF0F1";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();


     ctx.beginPath();
     ctx.arc(65, 350, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#F7F9F9";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();
 
     ctx.beginPath();
     ctx.arc(125, 350, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#ECF0F1";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(200, 350, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#F7F9F9";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(250, 360, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#ECF0F1";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(300, 330, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#F7F9F9";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(350, 360, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#ECF0F1";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(400, 360, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#F7F9F9";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(460, 340, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#ECF0F1";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(530, 370, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#F7F9F9";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(600, 350, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#ECF0F1";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(670, 340, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#F7F9F9";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(730, 350, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#ECF0F1";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(810, 340, 50, 0, 2 * Math.PI);
     ctx.strokeStyle = "#F2F3F4";
     ctx.fillStyle = "#F7F9F9";
     ctx.fill();
     ctx.stroke();
     ctx.closePath();

     ctx.restore();
}

function drawSnowman() {

    ctx.strokeStyle = "#EAEDED";
    ctx.fillStyle = "white";
    ctx.globalAlpha = 1;
    //bottom
    ctx.save();
    ctx.beginPath();
    ctx.arc(200, 320, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    //middle
    ctx.save();
    ctx.beginPath();
    ctx.arc(200, 250, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    //top
    ctx.save();
    ctx.beginPath();
    ctx.arc(200, 195, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    //arms
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "#F6DDCC";
    ctx.moveTo(228, 250);
    ctx.lineTo(250, 200);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = "#F6DDCC";
    ctx.beginPath();
    ctx.moveTo(170,250);
    ctx.lineTo(150, 200);
    ctx.stroke();
    ctx.restore();
}

function drawFallingSnow() {
    ctx.globalAlpha = .9;
    ctx.save();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "#D6EAF8";
    ctx.beginPath();
    //x, y -> center, radius, radians, math.pi * 2, clockwise or not
    ctx.arc(getRandomInt(0,800),getRandomInt(0,300),getRandomInt(1,3),0,Math.PI * 2,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

function drawTrees() {
    ctx.globalAlpha = .4;

    //trunk
    ctx.save();
    ctx.fillStyle = "#E59866";
    ctx.beginPath();
    ctx.rect(130,270,50,50);
    ctx.fill();
    ctx.restore();

    //tree leaves
    ctx.globalAlpha = .8;
    ctx.save();
    ctx.fillStyle = "#ABEBC6";
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(75, 270);
    ctx.lineTo(230,270);
    ctx.strokeStyle = "#82E0AA";
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    //tree leaves
    ctx.globalAlpha = .8;
    ctx.save();
    ctx.fillStyle = "#ABEBC6";
    ctx.beginPath();
    ctx.moveTo(160, 100);
    ctx.lineTo(100, 200);
    ctx.lineTo(200,200);
    ctx.strokeStyle = "#82E0AA";
    ctx.stroke();
    ctx.fill();
    ctx.restore();


    ctx.save();
    ctx.fillStyle = "#E59866";
    ctx.beginPath();
    ctx.rect(650,280,50,50);
    ctx.fill();
    ctx.restore();


    //tree leaves
    ctx.globalAlpha = .8;
    ctx.save();
    ctx.fillStyle = "#ABEBC6";
    ctx.beginPath();
    ctx.moveTo(690, 100);
    ctx.lineTo(800, 280);
    ctx.lineTo(550,280);
    ctx.strokeStyle = "#82E0AA";
    ctx.stroke();
    ctx.fill();
    ctx.restore();

      //tree leaves
      ctx.globalAlpha = .8;
      ctx.save();
      ctx.fillStyle = "#ABEBC6";
      ctx.beginPath();
      ctx.moveTo(780, 200);
      ctx.lineTo(580, 200);
      ctx.lineTo(700,50);
      ctx.strokeStyle = "#82E0AA";
      ctx.stroke();
      ctx.fill();
      ctx.restore();

}

function drawOrnamentsOnTreeBOTTOMLEFT() {
    ctx.save();
    ctx.globalAlpha = .5;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(130, 250, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .7;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(150, 220, 5, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .2;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(130, 190, 7, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .5;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(170, 150, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .7;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(170, 150, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .7;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(170, 240, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .5;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(170, 185, 4, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .5;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(100, 260, 4, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .5;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(120, 220, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .5;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(130, 165, 3, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .5;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(150, 140, 3, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

function drawOrnamentsOnTreeRight() {
    ctx.save();
    ctx.globalAlpha = .5;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(600, 260, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .7;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(620, 240, 4, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .7;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(610, 220, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .7;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(610, 190, 6, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .7;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(630, 160, 9, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .7;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(680, 100, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .5;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(670, 130, 5, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .6;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(700, 160, 8, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .6;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(690, 250, 12, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .6;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(720, 230, 7, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .6;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(750, 190, 7, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .8;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(710, 110, 7, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .8;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(690, 220, 7, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .8;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(660, 180, 7, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .8;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(750, 250, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .8;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(741, 150, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .8;
    ctx.fillStyle = RandomColor();
    ctx.strokeStyle = RandomColor();
    ctx.beginPath();
    ctx.arc(637, 220, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    
}

//Homework CANVAS #3
function RandomColor(){
    function getByte(){
  return 55 + Math.round(Math.random() * 200);
}
return "rgba(" + getByte() + "," + getByte() + "," + getByte() + ",.8)";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawBeach() {
    ctx.globalAlpha = 1;
    ctx.save();
    ctx.fillStyle = "#F5CBA7";
    ctx.rect(10, 350, 800, 100);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#795548";
    ctx.fillStyle = "#8D6E63"
    ctx.beginPath();
    ctx.rect(300,335,100,10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();

    ctx.fillStyle ="#F5CBA7";
    ctx.beginPath();
    ctx.arc(150, 360, 40, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle ="#F5CBA7";
    ctx.beginPath();
    ctx.arc(210, 360, 60, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
}

function drawSandDetail() {
    ctx.save();
    ctx.globalAlpha = .5;
    ctx.fillStyle = "#FDF2E9";
    ctx.strokeStyle = "#E67E22";
    ctx.beginPath();
    ctx.arc(getRandomInt(10,800),getRandomInt(350,500),getRandomInt(1,2),0,Math.PI * 2,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .5;
    ctx.fillStyle = "#FDF2E9";
    ctx.strokeStyle = "#E67E22";
    ctx.beginPath();
    ctx.arc(getRandomInt(10,800),getRandomInt(350,500),1,0,Math.PI * 2,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

function drawWater() {
    ctx.globalAlpha = .32;
    ctx.save();
    ctx.fillStyle = "#AED6F1";
    ctx.strokeStyle = "#85C1E9";

    ctx.rect(10, 360,800, 100);
    ctx.fill();
    ctx.restore();
}

function waterMove() {
    ctx.save();
    ctx.globalAlpha = .5;
    ctx.strokeStyle = "#2E86C1";
    ctx.fillStyle = "#2E86C1";
    ctx.beginPath();
    ctx.arc(getRandomInt(10,800),getRandomInt(400,370),getRandomInt(1,3),0,Math.PI * 2,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = .5;
    ctx.strokeStyle = "#2E86C1";
    ctx.fillStyle = "#2E86C1";
    ctx.beginPath();
    ctx.arc(getRandomInt(10,800),getRandomInt(400,370),getRandomInt(1,3),0,Math.PI * 2,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

function flames() {
    ctx.globalAlpha = .2;

    //red flames
    ctx.save();
    ctx.strokeStyle = "#E53935";
    ctx.fillStyle = "#EF9A9A";
    ctx.beginPath();
    ctx.arc(getRandomInt(330,340),getRandomInt(330,260),getRandomInt(1,3),0,Math.PI * 2,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = "#E53935";
    ctx.fillStyle = "#EF9A9A";
    ctx.beginPath();
    ctx.arc(getRandomInt(320,330),getRandomInt(330,280),getRandomInt(1,3),0,Math.PI * 2,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = "#E53935";
    ctx.fillStyle = "#EF9A9A";
    ctx.beginPath();
    ctx.arc(getRandomInt(350,340),getRandomInt(330,250),getRandomInt(1,3),0,Math.PI * 2,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = "#E53935";
    ctx.fillStyle = "#EF9A9A";
    ctx.beginPath();
    ctx.arc(getRandomInt(370,380),getRandomInt(330,290),getRandomInt(1,3),0,Math.PI * 2,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = "#E53935";
    ctx.fillStyle = "#EF9A9A";
    ctx.beginPath();
    ctx.arc(getRandomInt(340,380),getRandomInt(330,300),getRandomInt(1,3),0,Math.PI * 2,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    //yellow
    ctx.globalAlpha = .5;

    ctx.save();
    ctx.strokeStyle = "#FFF59D";
    ctx.fillStyle = "#FFEE58";
    ctx.beginPath();
    ctx.arc(getRandomInt(330,380),getRandomInt(330,310),getRandomInt(1,3),0,Math.PI * 2,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

//bucket
function drawBeachToys() {
    ctx.save();
    ctx.fillStyle = "#B39DDB";
    ctx.strokeStyle = "#7E57C2";
    ctx.beginPath();
    ctx.rect(50,345,60,4);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "#B39DDB";
    ctx.strokeStyle = "#7E57C2";
    ctx.beginPath();
    ctx.rect(45,315,70,30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(45,290,70,30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(45,270,70,30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(40,270,80,10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();

    //shovel
    ctx.save();
    ctx.fillStyle = "#B39DDB";
    ctx.strokeStyle = "#7E57C2";
    ctx.rect(230,297,10,30);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "#B39DDB";
    ctx.strokeStyle = "#7E57C2";
    ctx.rect(216,276,10,10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "#B39DDB";
    ctx.strokeStyle = "#7E57C2";
    ctx.rect(245,276,10,10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "#B39DDB";
    ctx.strokeStyle = "#7E57C2";
    ctx.rect(216,288,40,10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "#B39DDB";
    ctx.strokeStyle = "#7E57C2";
    ctx.rect(216,265,40,10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();




    ctx.save();
    ctx.strokeStyle = "#FFA726";
    ctx.beginPath();
    ctx.moveTo(250,330);
    ctx.lineTo(200,320);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}

function drawDetailedSnowFlakes() {
    //code that is documented in the documentation page about how to import drawings into Canvas
    let snow1 = new Image();
    let snow2 = new Image();

    snow1.src = "./images/snow_blue.png";
    snow2.scr = "./images/snow_blue1.png";

    
    ctx.save();
    ctx.globalAlpha = .5;
    ctx.beginPath();
    ctx.drawImage(snow1, getRandomInt(10,800),getRandomInt(0,370), snow1.width / 15, snow1.height / 15);
    ctx.drawImage(snow2, getRandomInt(10,800),getRandomInt(0,370), snow2.width / 15, snow2.height / 15);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    
}

function drawLeaves() {

    ctx.save();
    let l1 = new Image();
    l1.src = "./images/leaf1.png";
    ctx.globalAlpha = .5;
    ctx.drawImage(l1, getRandomInt(10,800),getRandomInt(0,370), l1.width / 15, l1.height / 15);
    ctx.restore();
}

function drawRain() {
    ctx.save();
    let rain = new Image();
    rain.src = "./images/raindrop.png";
    ctx.globalAlpha = .2;
    ctx.drawImage(rain, getRandomInt(10,800),getRandomInt(0,370), rain.width / 15, rain.height / 15);
    ctx.restore();
}

function drawGround() {
    //dirt
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "#7c6650";
    ctx.strokeStyle = "#634d38";
    ctx.rect(10,320,800,100);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    //grass
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "#67d28f";
    ctx.strokeStyle = "#4fc179";
    ctx.rect(10,320,800,50);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

function spawnBees() {
    ctx.save();
    let bees = new Image();
    bees.src = "./images/bees2.png";
    ctx.globalAlpha = .5;
    ctx.drawImage(bees, getRandomInt(70,170),getRandomInt(150,260), bees.width / 18, bees.height / 18);
    ctx.restore();
}

function drawBeeHive() {
    ctx.save();
    ctx.fillStyle = "#ffd966";
    ctx.strokeStyle = "#bf9000";
    ctx.beginPath();
    ctx.rect(100,200,60,30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(105,190,50,10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(110,180,40,10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(105,230,50,10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(110,240,40,10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

//display fish in water
function drawFish() {
    ctx.save();
    let fish = new Image();
    fish.src = "./images/fish.png";
    ctx.globalAlpha = .8;
    ctx.drawImage(fish, getRandomInt(10,800),getRandomInt(352,390), fish.width / 4, fish.height / 8);
    ctx.restore();
}

function drawTrees2() {
    ctx.save();
    let tree = new Image();
    tree.src = "./images/tree.png";
    ctx.globalAlpha = .99;
    ctx.drawImage(tree, 30,20, 250, 340);
    ctx.drawImage(tree,500,20,250,390);
    ctx.restore();
}

function spawnButterflies() {
    ctx.save();
    let butterflies = new Image();
    butterflies.src = "./images/butterfly.png";
    ctx.globalAlpha = .8;
    ctx.drawImage(butterflies, getRandomInt(10,800),getRandomInt(20,300), butterflies.width / 4, butterflies.height / 8);
    ctx.restore();
}

function drawFlowerStems() {

    ctx.fillStyle = "#67d28f";
    ctx.strokeStyle = "#4fc179";

    ctx.save();
    ctx.beginPath();
    ctx.rect(75,280,10,40);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.rect(240,280,10,60);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.rect(310,260,10,60);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.rect(430,260,10,90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.rect(550,290,10,60);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

function drawFlowers() {
    ctx.save();
    let flowerPINK = new Image();
    flowerPINK.src = "./images/flower.png";
    ctx.globalAlpha = 1;
    ctx.drawImage(flowerPINK,30,240, flowerPINK.width / 3, flowerPINK.height / 3);
    ctx.drawImage(flowerPINK,505,240, flowerPINK.width / 3, flowerPINK.height / 3);
    ctx.restore();

    ctx.save();
    let flower = new Image();
    flower.src = "./images/sunflower.png";
    ctx.drawImage(flower,193,240, flower.width / 3, flower.height / 3);
    ctx.drawImage(flower,265,220, flower.width / 3, flower.height / 3);
    ctx.drawImage(flower,387,210, flower.width / 3, flower.height / 3);
    ctx.restore();
}

function applesInTrees() {
    ctx.save();
    let apples = new Image();
    apples.src = "./images/apple.png";
    ctx.globalAlpha = 1;
    ctx.drawImage(apples,60,130, apples.width / 6, apples.height / 6);
    ctx.drawImage(apples,200,180, apples.width / 6, apples.height / 6);
    ctx.drawImage(apples,150,100, apples.width / 6, apples.height / 6);
    ctx.drawImage(apples,100,50, apples.width / 6, apples.height / 6);

    ctx.drawImage(apples,600,190, apples.width / 6, apples.height / 6);
    ctx.drawImage(apples,524,90, apples.width / 6, apples.height / 6);
    ctx.drawImage(apples,670,133, apples.width / 6, apples.height / 6);
    ctx.drawImage(apples,630,60, apples.width / 6, apples.height / 6);
    ctx.drawImage(apples,540,160, apples.width / 6, apples.height / 6);
    ctx.restore();
}

//this is to spam apples in the basket for apple picking vibes
function drawApples() {
    ctx.save();
    let apples = new Image();
    apples.src = "./images/apple.png";
    ctx.globalAlpha = 1;
    ctx.drawImage(apples, getRandomInt(280,350),getRandomInt(280,280), apples.width / 10, apples.height / 10);
    ctx.drawImage(apples, getRandomInt(290,340),getRandomInt(270,280), apples.width / 10, apples.height / 10);
    ctx.restore();
}

//apple basket
function drawBasket() {
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#947e68";
    ctx.strokeStyle = "#4f3924";
    ctx.save();
    ctx.beginPath();
    ctx.rect(300,330,60,5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(295,320,70,10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(290,310,80,13);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(285,300,90,13);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

function drawPumpkins() {
    ctx.save();
    let pumpkin = new Image();
    pumpkin.src = "./images/pump1.png";
    ctx.globalAlpha = 1;
    ctx.drawImage(pumpkin,60,260,pumpkin.width / 2.5, pumpkin.height / 2.5);
    ctx.drawImage(pumpkin,120,290,pumpkin.width / 3, pumpkin.height / 3);
    ctx.restore();

    ctx.save();
    let jac = new Image();
    jac.src = "./images/jack.png";
    ctx.globalAlpha = 1;
    ctx.drawImage(jac,600,300,jac.width / 2.5, jac.height / 2.5);
    ctx.drawImage(jac,500,270,jac.width / 4, jac.height / 4);
    ctx.restore();
}

function draw(params={}){
  // 1 - populate the audioData array with the frequency data from the analyserNode
	// notice these arrays are passed "by reference" 
	analyserNode.getByteFrequencyData(audioData);
	// OR
	//analyserNode.getByteTimeDomainData(audioData); // waveform data
	
	// 2 - draw background
	ctx.save();
    ctx.fillStyle = "white";
    
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    ctx.restore();
    ctx.globalAlpha = .5;


    if(params.changeBack) {
        let colorPick = document.getElementById('colorpicker');
        ctx.save();
        setInterval(()=>{
        let color = colorPick.value;
        ctx.fillStyle = color;
        ctx.globalAlpha = .1;
        ctx.fillRect(0,0,canvasWidth,canvasHeight);
        ctx.restore();
        //canvas.style.backgroundColor = color;
        }, 0);
    }
	// 4 - draw bars - audio visual hws
	if(params.showBars) {
        let barSpacing = 4;
        let margin = 5;
        let screenWidthForBars = canvasWidth - (audioData.length * barSpacing) - margin * 2;
        let barWidth = screenWidthForBars/audioData.length;
        let barHeight = 200;
        let topSpacing = 100;
        ctx.save();
        ctx.fillStyle = '#3498DB';
        ctx.strokeStyle = 'rgba(0,0,0,0.50)';
        //loop through data and draw
        for(let i = 0; i < audioData.length; i++) {
            ctx.fillRect(margin + i * (barWidth + barSpacing),topSpacing + 256-audioData[i],barWidth,barHeight);
            ctx.strokeRect(margin + i * (barWidth + barSpacing),topSpacing + 256-audioData[i],barWidth,barHeight);
        }
        ctx.restore();
    }

    //winter wonderland
    if(params.wintWond == true && params.summ == false && params.fall == false) {
        ctx.save();

        for(let i = 0; i < audioData.length; i++) {
            drawTrees();
            drawSnowOnGroundLayerTwo();
            drawSnowOnGroundLayerOne();
            ctx.globalAlpha = 1;
            drawSnowman();
            ctx.restore();
        }
        ctx.restore();
    }

    //snow falling
    if(params.letsnow) {
        ctx.save();
        for(let i = 0; i < audioData.length; i++) {
            ctx.globalAlpha = .7;
            drawFallingSnow();
            ctx.restore();
        }
        ctx.restore();
    }

    //ornaments only appear on trees in winter wonderland
    if(params.wintWond == true && params.ornaments) {
        ctx.save();
        for(let i = 0; i < audioData.length; i++) {
            ctx.globalAlpha = .7;
            drawOrnamentsOnTreeBOTTOMLEFT();
            drawSnowman();
            drawOrnamentsOnTreeRight();
            ctx.restore();
        }
        ctx.restore();
    }

    //summer scene set up
    if(params.summ == true) {
        ctx.save();
        drawBeach();
        drawBeachToys();
        for(let i = 0; i < audioData.length; i++) {
            ctx.globalAlpha = .7;
            drawSandDetail();
            drawWater();
            drawFish();
            waterMove();
            ctx.restore();
        }
        ctx.restore();
    }

    //fire only appears in summer scene
    if(params.fire == true && params.summ == true) {
        ctx.save(); 
        for(let i = 0; i < audioData.length; i++) {
            ctx.globalAlpha = .7;
            flames();
            ctx.restore();
        }
        ctx.restore();
    }

    //completely based off audio-visual "circles" 
    if(params.fli == true) {
       let maxRadius = canvasHeight/4;
        ctx.save();
        ctx.globalAlpha = 0.5;
        for(let i = 0; i < audioData.length; i++) {
            
            let percent = audioData[i]/255;
            let circleRadius = percent * maxRadius;
            ctx.beginPath();
             ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(20,150,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(20,150,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(20,150,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();



            ctx.beginPath();
             ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(625, 210,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(625, 210,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(625, 210, circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();



            ctx.beginPath();
             ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(640, 300,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(640, 300,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(640, 300, circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();




            ctx.beginPath();
             ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(540, 200,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(540, 200,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(540, 200, circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

        


            ctx.beginPath();
             ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(130, 250,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(130, 250,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(130, 250, circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();




            ctx.beginPath();
             ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(150, 20,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(150, 20,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(150, 20, circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();




            ctx.beginPath();
             ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(210, 150,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(210, 150,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(210, 150, circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();





            ctx.beginPath();
             ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(250, 290,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(250, 290,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(250, 290, circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();




            ctx.beginPath();
             ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(25, 230,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(25, 230,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(25, 230, circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();




            ctx.beginPath();
             ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(66, 130,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(66, 130,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(66, 130, circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();




            ctx.beginPath();
             ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(300, 110,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(300, 110,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(300, 110, circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();




            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(246,178,107, .34 - percent/3.0);
            ctx.arc(500, 90,circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,172,151,.10 - percent/10.0);
            ctx.arc(500, 90,circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(500, 90, circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.restore();
        }
        ctx.restore();
    }


    if(params.snowDe) {
        ctx.save(); 
        for(let i = 0; i < audioData.length; i++) {
            ctx.globalAlpha = .7;
            drawDetailedSnowFlakes();
            ctx.restore();
            }
        ctx.restore(); 
    }

    if(params.fall == true && params.summ == false && params.wintWond == false) {
        ctx.save(); 
        ctx.globalAlpha = .99;
        drawGround();
        drawTrees2();  //change this to handdrawn trees to make apples look better
        ctx.restore(); 
    }

    //falling leaves
    if(params.leafy) {
        ctx.save(); 
        for(let i = 0; i < audioData.length; i++) {
            ctx.globalAlpha = .7;
            drawLeaves();
            ctx.restore();
            }
        ctx.restore();
    }

    //rainy weather
    if(params.rainy) {
        ctx.save(); 
        for(let i = 0; i < audioData.length; i++) {
            ctx.globalAlpha = .7;
            drawRain();
            ctx.restore();
            }
        ctx.restore();
    }

    //"insects"
    //add function to draw random butterflies
    //add function to draw bees
    if(params.insec) {
        ctx.save();
        ctx.globalAlpha = 1; 
        drawBeeHive(); 
        spawnButterflies();
        spawnButterflies();
        for(let i = 0; i < audioData.length; i++) {    
            spawnBees();
            ctx.restore();
            }
        ctx.restore();
    }

    //add functions to display flowers on ground -> spring
    if(params.flow) {
        ctx.save();
        ctx.globalAlpha = 1;
        drawFlowerStems();
        drawFlowers();
        ctx.restore();
    }

    //add function to draw apples in trees & apple basket on ground
    if(params.apples) {
        ctx.save();
        applesInTrees();
        
        for(let i = 0; i < audioData.length; i++) { 
            drawApples();  
            ctx.restore();
        }
        drawBasket();
        ctx.restore();
    }

    //add function to generate pumpkins & faces that change->fall
    if(params.pumpkins) {
        ctx.save();
        drawPumpkins();
        ctx.restore();
    }

    //add fucntion to display stars in sky -> do something similiar to fireflies
    if(params.starry) {
        let maxRadius = canvasHeight/4;
        ctx.save();
        for(let i = 0; i < audioData.length; i++) {
            let percent = audioData[i]/255;
            let circleRadius = percent * maxRadius;
            //stars
            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(244,243,218, .34 - percent/3.0);
            ctx.arc(getRandomInt(10,800),getRandomInt(0,320),circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,254, 233,.10 - percent/10.0);
            ctx.arc(getRandomInt(10,800),getRandomInt(0,320),circleRadius * .2,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(253,216,53,.5 - percent/5.0);
            ctx.arc(getRandomInt(10,800),getRandomInt(0,320),circleRadius * .1,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(244,243,218, .34 - percent/3.0);
            ctx.arc(500,100,circleRadius * .8,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            //moon
            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,254, 233,.10 - percent/10.0);
            ctx.arc(500,100,circleRadius * .3,0, 2*Math.PI,false);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = utils.makeColor(255,255,255,.5 - percent/5.0);
            ctx.arc(500,100,circleRadius * .6,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();
        }
    }		
}


export {setupCanvas,draw};
