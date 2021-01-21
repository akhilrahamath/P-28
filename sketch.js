const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj,stone,groundObject, launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

  stone=new Stone(240,420,20);

  mango1=new mango(1100,100,30);
  
  mango2=new mango(990,100,30);

  mango3=new mango(1045,80,30);

  mango4=new mango(1220,180,30);

  mango5=new mango(1150,180,30);

  mango6=new mango(950,200,30);

  mango7=new mango(1045,200,30);

  launcher=new Launcher(stone.body,{x:240,y:420});

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {
  background(230);

  image(boy,200,340,200,300);

  stone.display();

  treeObj.display();
  
  mango1.display();

  mango2.display();

  mango3.display();

  mango4.display();

  mango5.display();

  mango6.display();

  mango7.display();

  launcher.display();

  groundObject.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
}

function mouseDragged(){
  Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();  
}

function detectollision(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position;
  stoneBodyPosition=Lstone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if(distance<=Lmango.r+Lstone.r){
    Body.setStatic(Lmango.body,false);
  }
}
