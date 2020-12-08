class Baseclass {
    constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.6,
          'friction':1.7,
          'density':1.0
      }
      this.image = loadImage("sprites/base.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  