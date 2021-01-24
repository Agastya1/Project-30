const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_image, stand1, stand2, ground, ball, slingShot, box1;
function preload(){
    polygon_image = loadImage("polygon.png");
}
function setup(){
    createCanvas(900,400);
    
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    //layer 2
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    //layer 3
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    //layer 4
    box16 = new Box(390,155,30,40);


    box_1 = new Box(640,175,30,40);
    box_2 = new Box(670,175,30,40);
    box_3 = new Box(700,175,30,40);
    box_4 = new Box(730, 175, 30, 40);
    box_5 = new Box(760,175,30,40);
   
    box_6 = new Box(670,135,30,40);
    box_7 = new Box(700,135,30,40);
    box_8 = new Box(730, 135, 30, 40);

    box_9 = new Box(700,95,30,40);
   

    // box_6 = new Box(700,175,30,40);
    // box_7 = new Box(700,175,30,40);

    ball = Bodies.circle(50,200, 20);
    World.add(world, ball);
    slingshot = new SlingShot(this.ball, {x:100, y:200});
}
function draw(){
    background(0);
    textSize(20);
    fill("lightyellow");
    text("Drag stone and release it to launch toward the blocks", 100, 30);
    ground.display();
    stand1.display();
    stand2.display();
    slingshot.display();

    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    fill("green");
    box_1.display();
    box_2.display();
    box_3.display();
    box_4.display();
    box_5.display();
    box_6.display();
    box_7.display();
    box_8.display();
    box_9.display();
    
    
  imageMode(CENTER);
 image(polygon_image, ball.position.x, ball.position.y, 40,40);
 
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x:mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}