var bnodes=[];
var bnode1;
var bnode2;
var started = false;
var touch = 0;


const bowler = new Tone.Player({
  "url" : "sound/meditation_bowl.wav",
  "autostart" : false,
  "loop" : true,
  "volume" : -10,
}).toMaster();

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
  
  if (touch == 0){
    bowler.start();
  }
  
  bnode2 = new breathingNode(mouseX, mouseY, 200, 1, random(400, 500), windowWidth, windowHeight);
  bnodes.push(bnode2);

  touch += 1;
    
    


  
}
