class Box{
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.25,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
    this.image = loadImage("redBox.png");
  }
  display(){
    if(this.body.speed < 3){
      var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visibility -= 5;
       tint(255,this.Visibility);
       image(this.image,this.body.position.x,this.body.position.y,30,40);
       pop();
     }
  }

  score(){
    if(this.Visibility === 250){
        score++;
    }
}
};
