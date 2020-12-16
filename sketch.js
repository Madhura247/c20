var a, b;

function setup() {
  createCanvas(800,400);
  b = createSprite(400, 200, 40, 50);
  a = createSprite(600, 100, 50, 60);
  a.shapeColor = "yellow";
  b.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
console.log(a.y - b.y);
  b.x = mouseX;
  b.y = mouseY;  

 if (a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < a.width/2 + b.width/2 && a.y - b.y < a.height/ 2+ b.height/ 2 && b.y - a.y < a.height/2 + b.height/2)  {

  b.shapeColor = "red";
 }
 else {
   b.shapeColor = "blue";
 }


  drawSprites();
}