class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.trij=[]
  }
  display() {
    if(gs==='end'){
    if(this.body.velocity.x>10&&this.body.position.x>200){
    var pos=[this.body.position.x,this.body.position.y]
    this.trij.push(pos)
  }
  for(var i=0;i<this.trij.length;i++){
    image(this.image1,this.trij[i][0],this.trij[i][1])
    }
  }
    super.display();
  }
}
