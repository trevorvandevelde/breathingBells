var bnodes=[];
var bnode1, newBnode;

var started = false;
var doubleCheck = false;

var leftnodes = []; //store what nodes are on the left side
var rightnodes=[]; //store what nodes are on the right side

var leftPitch, rightPitch;
var leftPan, rightPan;
var leftBowl, rightBowl;

var x = 140;



var sample = new Tone.Buffers({
  "loaded" : "sound/meditation_bowl_01.mp3"
});


function preload(){  //preload sounds and buffers

  leftPan = new Tone.Panner (-1).toMaster();
  rightPan = new Tone.Panner (1).toMaster();


  leftBowl = new Tone.Player({      
  "url" : "sound/meditation_bowl_01.mp3",
  "autostart" : false,
  "loop" : true,
  "volume" : -10,
  }).connect(leftPan).toMaster();

  rightBowl = new Tone.Player({
  "url" : "sound/meditation_bowl_01.mp3",
  "autostart" : false,
  "loop" : true,
  "volume" : -10,
  }).connect(rightPan).toMaster();

  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1.0);
  textAlign(CENTER);
  textSize(13);
  frameRate(20);
  noFill();
  noStroke(255);

  setTimeout(function() {
    doubleCheck = true;
  }, 20000);
  
}

function draw() {

    

  if (!doubleCheck) {
    fill(0);
    background(255);
    text("loading please wait", 80, 50);
    frameRate(1);
    ellipse(x, 50, 3, 3);
    x += 10;
    if (x > 200) {
      x = 140;
    }

  } else {
    background(155, 100, 100);
    noFill();
    noStroke(255);
    frameRate(20);
  }
    
    if (bnodes.length>0) { //draw all the nodes in bnodes onto the screen
      for(var i = 0; i < bnodes.length; i++){
        bnodes[i].display();
      }
    }
  }
  


function windowResized(){
  resizeCanvas(windowWidth, windowHeight); //resizes canvas
}

function touchStarted(){

  if (!started && doubleCheck){ //if not started, start
    console.log(sample.has("loaded"));
    leftBowl.start();
    rightBowl.start(); 

    started = true;

  } else if (started && doubleCheck){

    newBnode = new breathingNode(mouseX, mouseY, 200, 1, random(300, 500), windowWidth, windowHeight); //create a new node, push it to the list of nodes
    bnodes.push(newBnode);

    var n = (Math.random()>=0.50)?1:-1;

    leftBowl.playbackRate = 1 + n*(leftnodes.length/100); //change meditation sound on left channel, depending on the amount of nodes on the left side.
    rightBowl.playbackRate = 1 + n*(rightnodes.length/100); //change meditation sound on right channel, depending on the amount of nodes on the right side.

    if (newBnode.x < windowWidth/2) { //after the new node is made - add it to either left node or right node
      leftnodes.push(newBnode);
    } else {
      rightnodes.push(newBnode);
    }
  }
  
    
    


  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
