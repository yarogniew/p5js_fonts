var myFont;
var x=360;
function preload() {
  myFont = loadFont('Sansation_Regular.ttf');
}

function setup() {
  createCanvas(480, 320);
  background('white');
  fill('grey');
  textFont(myFont);
  textSize(16);
  //text('gąwno!', 10, 50);
}

function draw() {
  if (x>10)
  {  background('white');

    text('dłuższy tekst, który ma się pojawić!', x, 50);
    x-=5;
}


}
