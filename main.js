function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 250, 150, 200, 200);
    fill(252,1,77);
    stroke(252,1,77);
    circle(50,50,80);
    circle(50,400,80);
    circle(600,50,80);
    circle(600,400,80);

    fill(127,255,212);
    stroke(127,255,212);
    rect(90,30,470,45);
    rect(90,380,470,45);
    rect(30,90,40,270);
    rect(580,90,40,270);
}