const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand;
var block1, block2, block3, block4, block5;
var block6, block7, block8;
var block9, block10, block11, block12, block13, block14, block15;
var polygonImage;
var gameState= "onSlingShot";

var scores= 0;

function preload(){
   polygonImage= loadImage("hexagon.png");
}

function setup(){
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450, 590, 900, 20);
  stand = new Stand(450, 300, 400, 10);

  block1 = new Box(330, 290, 30, 40);
  block2 = new Box(360, 290, 30, 40);
  block3 = new Box(390, 290, 30, 40);
  block4 = new Box(420, 290, 30, 40);
  block5 = new Box(450, 290, 30, 40);
  block6 = new Box(480, 290, 30, 40);
  block7 = new Box(510, 290, 30, 40);

  block8 = new Box(360, 250, 30, 40);
  block9 = new Box(390, 250, 30, 40);
  block10 = new Box(420, 250, 30, 40);
  block11= new Box(450, 250, 30, 40);
  block12= new Box(480, 250, 30, 40);

  block13= new Box(390, 210, 30, 40);
  block14= new Box(420, 210, 30, 40);
  block15= new Box(450, 210, 30, 40);

  block16= new Box(420, 170, 30, 40);

  polygon= Bodies.circle(50, 200, 20);
  Matter.Body.setDensity(polygon, 4);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon,{x:100, y:100});
}

function draw(){
  background(0); 
  Engine.update(engine);
  
  textSize(30);
  fill("white");
  text("SCORE: "+ scores, 50, 40);
  
  ground.display();
  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  imageMode(CENTER);
  image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);

  slingShot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  block13.score();
  block14.score();
  block15.score();

  block16.score();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
 // gameState= "launched";
}