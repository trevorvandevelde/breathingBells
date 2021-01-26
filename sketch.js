var bnodes=[];
var bnode1;
var bnode2;
var started = false;
var touch = 0;
var leftnodes = [];
var rightnodes=[];

var leftPitch;
var rightPitch;

const leftPan = new Tone.Panner (-1).toMaster();
const rightPan = new Tone.Panner (1).toMaster();


const leftBowl = new Tone.Player({
  "url" : "sound/meditation_bowl.wav",
  "autostart" : false,
  "loop" : true,
  "volume" : -10,
}).connect(leftPan).toMaster();

const rightBowl = new Tone.Player({
  "url" : "sound/meditation_bowl.wav",
  "autostart" : false,
  "loop" : true,
  "volume" : -10,
}).connect(rightPan).toMaster();


function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1.0);
  frameRate(20);
  
  //bnode1 = new breathingNode(.5*windowWidth, .5*windowHeight, 200, 1, 400);
  
}

function draw() {
  background(150, 100, 100);
  noFill();
  noStroke(255);

  
    
    if (bnodes.length>0) {
      for(var i = 0; i < bnodes.length; i++){
        bnodes[i].display();
      }
    
    }

  }
  


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function touchStarted(){

  var n = (Math.random()>=0.50)?1:-1;
  
  if (touch == 0){
    leftBowl.start();
    rightBowl.start(); 
  }
  
  bnode2 = new breathingNode(mouseX, mouseY, 200, 1, random(300, 500), windowWidth, windowHeight);
  bnodes.push(bnode2);

  leftBowl.playbackRate = 1 + n*(leftnodes.length/100);
  rightBowl.playbackRate = 1 + n*(rightnodes.length/100);

  if (bnode2.x < windowWidth/2) {
    leftnodes.push(bnode2);
  }

  if (bnode2.x > windowWidth/2) {
    rightnodes.push(bnode2);
  }

  touch += 1;
    
    


  
}
