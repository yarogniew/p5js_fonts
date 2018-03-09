var myFont;
var x=360;
var xoff = 0.05;
var xincrement = 0.01;

function preload() {
  myFont = loadFont('Sansation_Regular.ttf');
}

function setup() {
  createCanvas(480, 320);
  //background('black');
  fill('white');
  textFont(myFont);
  textSize(16);
  //text('gąwno!', 10, 50);
}

function draw() {
  if (x>10)
  {  background('grey');
  var n = noise(xoff)*10;

  // With each cycle, increment xoff
  xoff = random(0,0.1);
    //text('dłuższy tekst, który ma się pojawić!', x, 50+n*300);
        text(n, x, height/2);
    x-=n;
}


}
