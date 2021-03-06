const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter=40;


function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;
  
  startbobpositionx=width/2
  startbobpositiony=height/4+500

	bob1= new Bob (startbobpositionx-bobDiameter*2,startbobpositiony,bobDiameter);
	bob2= new Bob (startbobpositionx-bobDiameter,startbobpositiony,bobDiameter);
	bob3= new Bob (startbobpositionx,startbobpositiony,bobDiameter);
	bob4= new Bob (startbobpositionx+bobDiameter,startbobpositiony,bobDiameter);
  bob5= new Bob (startbobpositionx+bobDiameter*2,startbobpositiony,bobDiameter);

  roof= new Roof (width/2,height/4,230,20);

  rope1= new Rope(bob1.body,roof.body,-bobDiameter*2.2,0);
  rope2= new Rope(bob2.body,roof.body,-bobDiameter*1.1,0);
  rope3= new Rope(bob3.body,roof.body,bobDiameter*0.1,0);
  rope4= new Rope(bob4.body,roof.body,bobDiameter*1.3,0);
  rope5= new Rope(bob5.body,roof.body,bobDiameter*2.4,0);
 
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  }

}

