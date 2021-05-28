const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

var ball,dustbin,ground;
var piller1,piller2,piller3,piller4,piller5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

ball=new Ball(100,600,10)

ground= new Ground(400,680,800,20)
piller1 = new Piller(300,620,100,150)
dustbinleft=new Dustbin(550,620,20,100)
dustbinbottom=new Dustbin(610,660,100,20)
dustbinright=new Dustbin(670,620,20,100)




	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
Engine.update(engine)

ball.display()
ground.display()
dustbinleft.display()
dustbinbottom.display()
dustbinright.display()
piller1.display()

  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})
}

}

