//const { Tone } = require("tone/build/esm/core/Tone");

function breathingNode(x, y, lens, generation, r, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    var lens = lens;
    var generation = generation;
    var maxR = r;
    var r = 0;
    var dr = 3;
    var g = random(100);
    
    var pan = (x/w) * (2) + -1 
    
    const panner = new Tone.Panner (pan).toMaster();

    const breathIn = new Tone.Player({
        "url" : "sound/breath1.mp3",
        "autostart" : true,
        "volume" : -1,
    }).connect(panner).toMaster();

    const breathOut = new Tone.Player({
        "url" : "sound/breath2.mp3",
        "autostart" : false,
        "volume" : -1,
    }).connect(panner).toMaster();


    breathIn.playbackRate = 500/maxR;
    breathOut.playbackRate = 500/maxR;

    this.display = function(){

        fill(255/generation,r,g,225);
        ellipse(x, y, r, r);

        if (r > maxR){
            breathOut.start();
            dr = -dr;
        } else if (r < 0){
            breathIn.start();
            dr = -dr;
        }
        r += dr;

        
        
    }

    










}