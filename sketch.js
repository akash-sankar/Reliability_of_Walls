var bullet, wall, thickness;
var speed, weight;
var  damage;
var object1, object2;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

  bullet = createSprite(500, 200, 50, 10);
  wall = createSprite(1200,200,thickness,height/2);

  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);

  bullet.velocityX = speed;

  text("Bullet Speed : "+speed+"         Bullet Weight : "+weight+"         Wall Thickness : "+thickness+"         Damage to the Wall: "+damage,300,50)

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0

    if (damage < 10){
      wall.shapeColor = color(0,255,0);
    }
    
    if (damage > 10 ){
      wall.shapeColor = color(255,0,0);
    }

  }

  drawSprites();
}

function hasCollided(object1,object2){
  bulletRightEdge = object1.x+object1.width/2;
  wallLeftEdge = object2.x - object2.width/2;

  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}