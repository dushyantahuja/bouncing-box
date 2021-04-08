const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, groot;
var box1,B2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    groot = new GROOT(200,350,400,30)


    box1 = new Box(200,300,50,50);
    B2 = new Box(240,200,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    B2.display();
    groot.display()
}