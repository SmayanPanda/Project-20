var car,wall,speed,weight


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="brown"
  car.velocityX=speed;
}

function draw() {
  background("black"); 
  if(wall.x-car.x<wall.width/2+car.width/2) 
  {
    car.velocityX=0
    d=0.5*weight*speed*speed/22500;
    if(d<100)
    {
      car.shapeColor="green"
    }
    if(d>100&&d<180)
    {
      car.shapeColor="yellow"
    }
    if(d>180)
    {
      car.shapeColor="red"
    }
  }
  drawSprites();
}