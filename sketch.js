var myFont;
function preload() {
  myFont = loadFont('assets/AvenirNextLTPro-Demi.otf');
}

function setup() {
  fill('#ED225D');
  textFont(myFont);
  textSize(36);
  text('p5*js', 10, 50);
}
