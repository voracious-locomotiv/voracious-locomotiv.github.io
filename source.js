
var button;
var slider;
var color = 0;

function setup(){
    createCanvas(700, 500);
    background(200);
    button = createButton("press");
    button.position(50, 50);
    button.mousePressed(changeColor);
    slider = createSlider(0, 50, 100);
    slider.position(50,100);

}
function draw(){
    color = slider.value();
    background(color);
    console.log(slider.value());
}


function changeColor(){
    console.log("pressed");
    background(0);
    fill(0,200,200);
    ellipse(100,100,50,50);
}

