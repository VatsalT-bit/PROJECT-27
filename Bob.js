class Bob{
    constructor(x, y,r) {
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2,
            isStatic:true
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle (this.x, this.y, (this.r-20), options);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("red")
        ellipseMode(CENTER);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
  }