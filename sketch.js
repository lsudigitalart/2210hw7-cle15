
//var slot = 10;
//var slot1 =500;
//var radius = 50;
//var x1 = - radius;
var r = 0;
var t = 0;
var xspeed = 6;
var yspeed = 3;
//var speed3 = 4;
//var diameter = 30;
var x;
var y;
var Sound;
//var b = 0;
//var direction = 1;
function preload()
{
  Sound = loadSound("music/Alan Walker - Fade [NCS Release].mp3");
}
function setup(){
  //what is wrong with the server connecting to this...
  //frameRate(45);
  createCanvas(640,400);
  background(0);
  //x = width/2;
  //y = height/2
  //mmusic = loadSound(music/Alan Walker - Fade [NCS Release].mp3);
  //mySound.play(music/Alan Walker - Fade [NCS Release].mp3);
  //mySound.loop();
  //ellipseMode(RADIUS);
  //or mySound.loop just loop
  //p5 amplitude
}
function draw(){
background(0);
var time = millis();
Sound.play();
rectMode(CENTER);
ellipseMode(RADIUS);
translate(55,20);
frameRate(1.5);

if((time>50) && (time<6000))
{
fill(144, 22, 55);
rect(random(width),random(height),50,50);
}
else if((time>6000) && (time<12000))
{
//pop(slot1);
rect(random(width),random(height),random(width),random(width));
}
else if((time>12000) && (time<24000))
{
 fill(200,149,59);
 ellipse(random(width), 10, 50,50);
 ellipse(10, random(height), 50,50);
}
else if((time>24000) && (time<80000))
{
  frameRate(3);
  fill(125,200,40);
  rect(320,200, 400,400);
  fill(100,40,8);
  rect(random(width), random(height), 10, 5);
  ellipse(random(width), random(height), 20,20);
  ellipse(random(width), random(height), 10,35);
  if(time == 40000 || time == 60000)
  {
    ellipse(random(width), 200, 50, 50);
  }
  //Sound.pause();
}
}
/*
else if((time>80000) && (time<120000))
{
  //scale(b);
  fill(200, 3,25);
  rotate(random(x));
  ellipse(random(width), random(height), 12, 13);
  ellipse(random(width), random(height), 15, 12);
  ellipse(random(width), random(height), 12, 12);
  ellipse(random(width), random(height), 12, 11);
  ellipse(random(width), random(height), 12, 16);
  ellipse(random(width), random(height), 12, 13);
  ellipse(random(width), random(height), 15, 14);
  ellipse(random(width), random(height), 11, 12);
  ellipse(random(width), random(height), 12, 10);
  ellipse(random(width), random(height), 12, 16);
}
else if((time>120000) && (time<270000))
{
  frameRate(3);
  fill(220,50,20);
  ellipse(random(width), random(height), 30, 55);
  rect(random(width), random(height), 70,70);
  rect(random(width), random(height), 40,55);
}
else if(time>270000)
{
  Sound.pause();
}
rotate(r);
}
/*if(t > 300) {
  //  shine = 0;
    //ly = random(0, height/10);
    ty = random(height/2);
  }

  if (t < -200) {
    shine = 1;
    ly = random(0, height/10);
    ty = random(height/2);
  }
  if(shine == 1) {
  sz++;
} else {
  sz--;
}
/*function mouseIsPressed{
background(0);
charGen(mouseX, mouseY, 100);
}
//x+= speed * direction;
//if((x > width-radius) ||(x<radius)){
  //direction = - direction;
//}
//if(y>width+width/2){
  //y = -width;
//}
//if(time > slot)
//{
  //ellipse(x,y,diameter,diameter);
//x += random(-speed2, speed2);
//y += random(-speed2, speed2);
//translate(x,y);
function charGen(eyes, mouth, body)
{
  fill(random(255, random(255),random(255)));
  ellipse(width/2, eY, body, body*random(3));

  fill (random(255, random(255, random(255))));
  rectMode(CENTER);
  rect(width/2, eY-20*random(2). map(eyes, 0, width, 10, 40)),8);
}
*/
//}
//else if(time < slot1){
  //scale(1/2);
//}

//if(time < slot1)
//{
  //x += random(-speed3, speed3);
  //y += random(-speed3, speed3);
  //scale(3);
  //ellipse(x, y, diameter, diameter);
//}

//x1 += speed;
//if(x > width+radius){
  //x= -radius;
//}
//arc(x1, 40 , radius, radius, 0.7, 6);
  //x1 = speed - x * ;
