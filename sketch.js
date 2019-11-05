// - stuff in setup is display stuff in update is draw

var randYPos1;
var randYPos2;
var randYPos3;
var randYPos4;
var randYPos5;
var randYPos6;
var randYPos7;
var randYPos8;
var randYPos9;
var randYPos10;

var myFly1;
var myFly2;
var myFly3;
var myFly4;
var myFly5;
var myFly6;
var myFly7;
var myFly8;
var myFly9;
var myFly10;
let ranges = [400,450,500,550];

var bgpic;
var sugar;


function preload(){

bgpic = loadImage("picnictc.jpg");
sugar = loadImage("sugar.png");
}
function setup() {
    createCanvas(800,600);
noCursor();


 randYPos1 = random(150);
 randYPos2 = random(350);
 randYPos3 = random(ranges);
 randYPos4 = random(150);
 randYPos5 = random(250);
 randYPos6 = random(ranges);
 randYPos7 = random(300);
 randYPos8 = random(ranges);
 randYPos9 = random(ranges);
 randYPos10 = random(ranges);
 
 myFly1 = new Fly(10, random(200), random(200), random(200),randYPos1,0,20);
 myFly2 = new Fly(2, random(200), random(200), random(200),randYPos2,0,40);
 myFly3 = new Fly(5, random(200), random(200), random(200),randYPos3,0,30);
 myFly4 = new Fly(7, random(200), random(200), random(200),randYPos4,0,15);
 myFly5 = new Fly(3.3, random(200), random(200), random(200),randYPos5,0,45);
 myFly6 = new Fly(5.5, random(200), random(200), random(200),randYPos6,0,34);
 myFly7 = new Fly(4, random(200), random(200), random(200),randYPos7,0,14);
 myFly8 = new Fly(6.7, random(200), random(200), random(200),randYPos8,0,45);
 myFly9 = new Fly(10.5, random(200), random(200), random(200),randYPos9,0,22);
 myFly10 = new Fly(3, random(200), random(200), random(200),randYPos10,0,17);


}
  
function draw() {
 background(100); 
 push();
 image(bgpic,0,0,800,600)
 pop();

 push();
 textSize(52);
 fill(128,0,32);
 textStyle(BOLDITALIC);
 text('The flies are after the sugar!', 50, 550);
  pop();
 
 push();
 image(sugar,mouseX,mouseY,80,120)
 pop();
  
   myFly1.update();  
   myFly1.display();

   myFly2.update();  
   myFly2.display();

   myFly3.update();  
   myFly3.display();

   myFly4.update();  
   myFly4.display();

   myFly5.update();  
   myFly5.display();

   myFly6.update();  
   myFly6.display();


    }
  


function Fly(tempSpeed, tempColorR,tempColorG,tempColorB,tempY,tempX,tempSize) {
  this.speed = tempSpeed;
  this.colorR = tempColorR;
  this.colorG = tempColorG;
  this.colorB = tempColorB;
  this.yPos = tempY;
  this.xPos = tempX;
  this.size = tempSize;



this.display = function() {
push();
stroke(0,80)
fill(255,80);
ellipse(this.size * .8 + this.xPos,this.yPos-(this.size/1.8), this.size-5,this.size+5);
ellipse(this.size * .8 + this.xPos+12,this.yPos-(this.size/1.8), this.size-5,this.size+5);
pop();
push();
fill(this.colorR,this.colorG,this.colorB);
ellipse(this.xPos+(this.size * 1),this.yPos, this.size+8,this.size-4);
pop();

}

this.update = function(){
  this.xPos = this.xPos + this.speed;

  if(this.xPos > width){
    this.xPos = 0;
  }
}


this.interaction = function(){


}


}














