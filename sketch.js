var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug = true;
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green"; 
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(300,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(400,100,50,50);
  gameObject3.shapeColor = "green";

}

function draw() {
  background(255,255,255);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
if(isTouching(movingRect,gameObject3)){
  movingRect.shapeColor="blue";
  gameObject3.shapeColor="blue";
}
else{
  movingRect.shapeColor="green";
  gameObject3.shapeColor="green";
}
  drawSprites();
}


