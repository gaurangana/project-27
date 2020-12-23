
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1 , bob2 , bob3 , bob4 , bob5 , bob6 ;
var rope1 , rope2 , rope3 , rope4 , rope5
var roofObject


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
   roofObject = new Roof(400,150,230,20) ;
	bobDiameter = 40;
	
	startBobPositionX = width/2 ;
	startBobPositionY = height/4+500 ;

	bob1 = new Bob(300,300,40)
	bob2 = new Bob(340,300,40)
	bob3 = new Bob(400,300,40)
	bob4 = new Bob(440,300,40)
	bob5 = new Bob(500,300,40)
	bob6 = new Bob(200,300,40)

	rope1 = new Rope(bob1.body,roofObject.body,-80,0) ;
	rope2 = new Rope(bob2.body,roofObject.body,40,0)
	rope3 = new Rope(bob3.body,roofObject.body,0,0)
	rope4 = new Rope(bob4.body,roofObject.body,400,0)
	rope5 = new Rope(bob5.body,roofObject.body,80,0)

	//var opt

}
  



function draw() {
  background(0);
   bob1.display()
   bob1.display()
   bob1.display()
   bob1.display()
   bob1.display()
   bob1.display()

   rope1.display()
   rope2.display()
   rope3.display()
   rope4.display()
   rope5.display()

  
  drawSprites();
 
}



