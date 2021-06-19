const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = 'sprites/sunrise2.png';

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response =await fetch("http://worldtimeapi.org/api/timezone/Australia/Sydney");
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset

    if(hour < 16 && hour > 07) {
        bg = "sprites/sunrise2.png";

} 
else  {
        bg = "sprites/sunset9.jpg";
}

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
