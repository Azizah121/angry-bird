class Log{
    constructor(x,y,width,angle){
    var options={
        angle:angle,
        density:1,
        friction:1,
        restitution:1
    }   
this.body=Matter.Bodies.rectangle(x,y,width,10,options);
Matter.Body.setAngle(this.body,angle);
this.width=width;
this.height=10;
this.image=loadImage("sprites/wood2.png");
Matter.World.add(world,this.body);

    }
    display(){
var pos=this.body.position;
var angle=this.body.angle;

push();
strokeWeight(4);
stroke("brown");
imageMode(CENTER);
   translate(pos.x,pos.y);
   rotate(angle);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
}