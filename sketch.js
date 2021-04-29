const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(2000,2000);

	engine = Engine.create();
	world = engine.world;
   
	bob1= new Bob (550,370,45,45);
	bob2= new Bob (597,370,45,45);
	bob3= new Bob (644,370,45,45);
	bob4= new Bob (691,370,45,45);
	bob5= new Bob (738,370,45,45);

  roof= new Roof (640,150,250,30);

  rope= new Rope (bob1.body,roof.body,-bobDiameter*2,0);
 
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}



