
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbinObject1;
var dustbinObject2;
var dustbinObject3;
var ground;

var engine;
var world;

function setup() {
	createCanvas(1200,400);
    

	


	engine = Engine.create();
	world = engine.world;

	dustbinObject1 = new Box(720,390,145,10);
	dustbinObject2 = new Box(790,345,10,100);
	dustbinObject3 = new Box(650,345,10,100);
	paper = new Paper(100,300,20);
	ground = new Ground(601,400,1200,20);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  dustbinObject1.display();
  dustbinObject2.display();
  dustbinObject3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
     
		Matter.Body.applyForce(paper.body,paper.body.position,{X:-85,Y:85});
	}
}

