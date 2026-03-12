
let sound, amp, cnv;
let imgSelecter = document.getElementById('imgStuff');

function preload() {
  //replace this sound with something we can distribute
  sound = loadSound('sound/audioforp5jsmp4.mp4');
}

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent('p5-stuff')
  cnv.mousePressed(playSound);
  textAlign(CENTER);
  fill(255);
  amp = new p5.Amplitude();
  sound.connect(amp);
  //select DOM element using p5's select function
  //let imgSelector = Document.querySelector('#imgStuff');
  describe('The color of the background changes based on the amplitude of the sound.');
}
 
function playSound() {
  sound.play();
}
 
function draw() {
  let level = amp.getLevel();
  background (139, 0, 0);
  amp.smooth (0.8);
  //maps one range of values to another range of values
  level = map(level, 0, 0.2, 0, 255);
  imgSelecter.style.width = level + '%';
  text("click to yell", width/2, height/2);
}
