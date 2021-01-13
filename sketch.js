
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var chain1,ball1,block1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new ball(300,250,30);
	ball2 = new ball(350,250,30);
	ball3 = new ball(200,1,30);
	ball4 = new ball(450,250,30);

	block1 = new block(350,100,50,40)
	block2 = new block(400,100,50,40)
	block3 = new block(300,100,50,40)
	block4 = new block(450,100,50,40)

	chain1 = new chain(ball1.body,block1.body)
	chain3 = new chain2(ball2.body,block1.body)
	chain4 = new chainm(ball4.body,block4.body)
	chain5 = new chain0(ball3.body,block3.body)

	ground = new block(400,700,800,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();

	block1.display();
	block2.display();
	block3.display();
	block4.display();

	chain3.display();
	chain1.display();
	chain4.display();
	chain5.display();

	ground.display();
  drawSprites();
 
}



