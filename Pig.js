class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255
  }

  display(){
    if(this.body.speed>3){
      push()
      var position= this.body.position
     World.remove(world,this.body)
     tint(255,this.visibility)
     image(this.image,position.x,position.y,50,50)
     this.visibility -= 5
     pop()
    }
    else{
    super.display()
    }
  }

  score()
  {
    if(this.visibility<255 && this.visibility>0){
      score++
    }
  }
};