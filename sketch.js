var car,car2,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  car1 = createSprite(50, 50,20,10);
  car1.velocityX = random(20,30);
  car1.shapeColor = "pink";

  car2=createSprite(50,300,20,10);
  car2.velocityX = random(20,30);
  car2.shapeColor = "blue";

  wall1=createSprite(1500,95,30,190)
  wall1.shapeColor="white";
  
  wall2=createSprite(1500,295,30,190)
  wall2.shapeColor="white";
}

function draw() {
  background(0);
  if (wall1.x-car1.x<(car1.width+wall1.width)/2){
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car1.shapeColour=color(255,0,0);
    }
  
    if(deformation<180 &&deformation>100){
      car1.shapeColor=color(230,230,0)
    }
  
    if(deformation<100)
    {
      car1.shapeColor=color(0,255,0);
    }
  
  }

  if (wall2.x-car2.x<(car2.width+wall2.width)/2){
    car2.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car2.shapeColour=color(255,0,0);
    }

    if(deformation<180 &&deformation>100){
      car2.shapeColor=color(230,230,0)
    }

    if(deformation<100)
    {
      car2.shapeColor=color(0,255,0);
    }

  }  
  drawSprites();
}