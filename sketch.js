function preload(){
//mySound = loadSound("music/Alan Walker - Fade [NCS Release].mp3");
}
var slot = 100;
var slot1 =10000;
var radius = 50;
var x1 = - radius;
var speed = .75;
var speed2 = 3;
var speed3 = 4;
var diameter = 30;
var x;
var y;

function setup(){
  //what is wrong with the server connecting to this...
  frameRate(45);
  createCanvas(640,400);
  x = width/2;
  y = height/2
  //mmusic = loadSound(music/Alan Walker - Fade [NCS Release].mp3);
  //mySound.play(music/Alan Walker - Fade [NCS Release].mp3);
  //mySound.loop();
  ellipseMode(RADIUS);
  //or mySound.loop just loop
  //p5 amplitude
}
function draw(){
background(0);
var time = millis();
if(time < slot)
{
x += random(-speed2, speed2);
y += random(-speed2, speed2);
}

if(time > slot1)
{
  x += random(-speed3, speed3);
  y += random(-speed3, speed3);
}
ellipse(x, y, diameter, diameter);
x1 += speed;
if(x > width+radius){
  x= -radius;
}
arc(x1, 60 , radius, radius, 0.7, 6);
  //x1 = speed - x * ;
}
