var myFont;
var x=360;
function preload() {
  myFont = loadFont('Sansation_Regular.ttf');
}

function setup() {
  createCanvas(360, 480);
  background('white');
  fill('#ED225D');
  textFont(myFont);
  textSize(36);
  //text('gąwno!', 10, 50);
}

function draw() {
  if (x>100)
  {  background('white');

    text('gąwno!', x, 50);
    x-=5;
}


}
