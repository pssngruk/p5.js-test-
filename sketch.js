let r,g,b,x,y;
let droplet = 0;

function setup() 
{
  createCanvas(800, 800);  
}

function draw() 
{
  r = random(0,255);
  g = 0;
  b = random(0,255);
  x = random(0,800);
  y = droplet;
  droplet++
  
  fill(r,g,b, 50);
  noStroke();
  circle(x,y,10);
}

function mousePressed()
{
background(0);
droplet = 0;
}