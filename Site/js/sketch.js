// Standard P5 Project
let font = undefined;

let gg = undefined;
let myCanvas;

const FONT_PATH = "assets/font/123Marker.ttf";

function preload(){

    font = loadFont(FONT_PATH);

}

function setup() {

    myCanvas = createCanvas(1000,1000);
    myCanvas.parent("osuContainer");

    gg = new Combo();

    setInterval(function(){gg.newHitCircle();},200);



}

function draw() {

    background(0);

    gg.drawCombo();

}

function keyPressed(){
    switch(keyCode){

        case 81: // 81 = Q
            gg.newHitCircle(mouseX,mouseY);
            break;
    }
}
