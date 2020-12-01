const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,ground1,box;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31,block32;
var polygon,slingShot;
var  polygonImg;

function preload() 
  {
    polygonImg = loadImage("hexagon.png");
  

  }
function setup() {
  
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  block1= new Box(360,350,30,40);
  block2= new Box(390,350,30,40);
  block3= new Box(420,350,30,40);
  block4= new Box(450,350,30,40)
  block5= new Box(480,350,30,40);
  block6= new Box(390,195,30,40);
  block7= new Box(420,195,30,40);
  block8= new Box(450,235,30,40);
  block9= new Box(420,155,30,40);
  block10= new Box(330,350,30,40);
  block11= new Box(510,350,30,40);
  block12=new Box(480,235,30,40);
  block13= new Box(360,195,30,40);
  block14= new Box(390,155,30,40);
  block15= new Box(450,155,30,40);
  block16= new Box(420,100,30,40);

  block17= new Box(830,100,30,40);
  block18= new Box(860,100,30,40);
  block19= new Box(890,100,30,40);
  block20= new Box(920,100,30,40);
  block21= new Box(950,100,30,40);
  block22= new Box(980,100,30,40);
  block23= new Box(1010,100,30,40);
  block24= new Box(920,60,30,40);
  block25= new Box(950,60,30,40);
  block26= new Box(980,60,30,40);
  block27= new Box(890,60,30,40);
  block28= new Box(860,60,30,40);
  block29= new Box(920,20,30,40);
  block30= new Box(890,20,30,40);
  block31= new Box(950,20,30,40);
  block32= new Box(920,-20,30,40);

  ground = new Ground(420,400,250,20);
  ground1 = new Ground(920,250,250,20);
  ground3= new Ground(550,619,1500,50)
  polygon = new Polygon;
  slingshot = new SlingShot(polygon.body,{x:100, y:100});
  Engine.run(engine);
}
 
function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  ground1.display();
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
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  polygon.display();
  slingshot.display();
  ground3.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:100,y:100})
    slingshot.attach(polygon.body);
  }
}