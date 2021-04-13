class slingshot {
    constructor(body1, point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : .03,
            length : 10
        }
        this.sling= Constraint.create(options)
        World.add(world, this.sling);

        this.image1= loadImage("sprites/sling1.png")
        this.image2= loadImage("sprites/sling2.png")
        this.image3= loadImage("sprites/sling3.png")
    }

    display(){

        image(this.image1, 228,80,40,140)
        image(this.image2, 200,80,40,80)
        
        if(this.sling.bodyA){
        var startxy= this.sling.bodyA.position;
        var endxy= this.sling.pointB;
        push()
        if(startxy.x>260){
            stroke("#4A2816")
        strokeWeight(7);
        line(startxy.x,startxy.y,endxy.x-34,endxy.y+7);
        line(startxy.x,startxy.y,endxy.x+20,endxy.y+9);
        image(this.image3, startxy.x-30,startxy.y-10,15,20)
        }
        else
            {strokeWeight(3);
                stroke("#4A2816")
            line(startxy.x,startxy.y,endxy.x-34,endxy.y+7);
            line(startxy.x,startxy.y,endxy.x+20,endxy.y+9);
            image(this.image3, startxy.x+10,startxy.y-10,15,20)}

        pop()
        }
        
    }
    fly(){
        this.sling.bodyA= null;
    }

     attach(birdbody){
         this.sling.bodyA= birdbody
     }
}
