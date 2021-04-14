class Paper{

    constructor(x,y,radius){

        var options={
            isStatic:false,
            restitution:0.4,
            friction:0.6,
            density:1.2
        }

    this.body = Bodies.circle(x,y,radius/2,options);
    this.x=x;
    this.y=y;
    this.radius=radius;
    World.add(world, this.body);
    
 }


  display(){
      
    var paperposition = this.body.position;

     push()
     translate(paperposition.x,paperposition.y);
     fill(255,0,255);
     ellipse(0,0,this.radius,this.radius);
     ellipseMode(RADIUS);
     pop()
    
  }


































}