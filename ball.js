class Ball {
    constructor(x,y,radius) {
      var options = {
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width = width;
      this.height = height;
      this.radius=radius
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(pos.x,pos.y,this.radius,this.radius)
    }
  };