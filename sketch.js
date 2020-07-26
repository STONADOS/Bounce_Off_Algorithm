var fixed, moving, a, b;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor="silver";
  moving = createSprite(200,200,50,50);
  moving.shapeColor="gold";
  a = createSprite(100, 200, 50, 50)
  stroke("blue");
  a.shapeColor="pink";
  a.velocityX = 4;
  b = createSprite(700, 200, 50, 50)
  stroke("red");
  b.shapeColor="blue";
  b.velocityX = -4;

}

function draw() {
  background(0);
  drawSprites();
  moving.x = World.mouseX;
  moving.y = World.mouseY;

  
  if (isTouching(moving, fixed)){
    fixed.shapeColor = "red";
    moving.shapeColor = "blue";
  }
  else{
    fixed.shapeColor="silver";
    moving.shapeColor="gold";
  }

  bounceoff(a, b);
}

function isTouching(object1, object2){
  
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 && 
    object2.x - object1.x <= object1.width/2 +  object2.width/2 && 
    object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object1.height/2 + object2.height/2)
  {
    return true;
  }
  else{
    return false;
  }

}

function bounceoff(object1, object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 && 
    object2.x - object1.x <= object1.width/2 +  object2.width/2 )
  {
    object1.velocityX = -1*object1.velocityX;
    object2.velocityX = -1*object2.velocityX;

  }
  if (object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object1.height/2 + object2.height/2)
  {
    object1.velocityY = -1*object1.velocityY;
    object2.velocityY = -1*object2.velocityY;
  }

}