
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var box1, box2, box3
var ground1, ball1

function preload()
{
	
	
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	
	
	
	


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground



	Engine.run(engine);
  
	box1 = new Box(680,760,200,20)

 
	box2 = new Box(780,730,20,100)
	
   
	box3 = new Box(580,730,20,100)

	ground1 = new Ground(400,780,800,10)

ball1 = new Ball(50,645,20)

	

}


function draw() {
  rectMode(CENTER);
  background("pink");
   
  drawSprites();
  box1.display()
  box2.display()
  box3.display()
  ground1.display()
  ball1.display()
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:70,y:-70})
   
  }
}



