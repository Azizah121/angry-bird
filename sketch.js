var World
var ball, engine, World
var Engine=Matter.Engine;
var Bodies=Matter.Bodies;
function preload(){
  bg=loadImage("sprites/bg.png")
}
function setup(){
createCanvas(1200,400);
engine=Engine.create();
world=engine.world;
Ground1=new Ground(600,390,1200,20);
Box1=new Box(1000,200);
Box2=new Box(1100,200,20,30);
Pig1=new Pig(1050,200);
Log1=new Log(1050,150,200,PI);
Box3=new Box(1000,300);
Box4=new Box(1100,300,20,30);
Pig2=new Pig(1050,300);
Log2=new Log(1050,250,200,PI);
Log3=new Log(1015,100,90,-PI/4);
Log4=new Log(1085,100,90,PI/4);
Box5=new Box(1050,120,20,30);
Bird1=new Birds(100,50,20,20)
}
function draw(){
  //background(bg);
  imageMode(CENTER);
  image(bg,width/2,height/2, width, height);
  Matter.Engine.update(engine);
  Ground1.display();
  Box1.display();
 Box2.display();
 Pig1.display();
 Log1.display();
 Box3.display();
 Box4.display();
 Pig2.display();
 Log2.display();
 Log3.display();
 Log4.display();
 Box5.display();
 Bird1.display();
}