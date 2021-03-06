class Polygon{
    constructor(x,y){
        var options = {
            'density': 20,
            'friction':1.0,
            'restitution':0.5
        }
        this.image = loadImage("polygon.png");
        this.body = Bodies.rectangle(x,y,30,30,options);
        this.width = 30;
        this.height = 30;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}