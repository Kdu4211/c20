
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball
let cubo
let retangulo

let solo


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	let solo_options = {
		isStatic: true
	};

	solo = Bodies.rectangle(0,700,800,20,solo_options);
	World.add(world,solo);

	//Crie os Corpos Aqui.
	let ball_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir: 0
	}
	let cubo_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir: 0.1
	}
	let retangulo_options = {
		restitution:0.01,
		friction:1,
		frictionAir: 0.03
	}

	ball = Bodies.circle(220,10,10,ball_options);
	World.add(world,ball);

	cubo = Bodies.rectangle(110,50,10,10,cubo_options);
	World.add(world,cubo);

	rectangle = Bodies.rectangle(350,50,20,10,retangulo_options);
	World.add(world,rectangle);

	rectMode(CENTER);
	ellipseMode(RADIUS);  
}


function draw() {
  	background("white");
 	Engine.update(engine);

	rect(solo.position.x,solo.position.y,800,10);
	ellipse(ball.position.x,ball.position.y,10);
	rect(cubo.position.x,cubo.position.y,10,10);
	rect(rectangle.position.x,rectangle.position.y,20,10);

  	drawSprites();
 
}



