var Ground,paperB
var rect1, rect2, rect3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	Ground = new ground(750,650,1600,10);
	paperB = new paper(50,610,15);

	rect1 = createSprite(600,640,100,10);
	rect2 = createSprite(550,610,10,70);
	rect3 = createSprite(650,610,10,70);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 Ground.display();
 paperB.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperB.body,paperB.body.position,{x:30,y:-30});
	}
}



