function setup() {
  createCanvas(500, 500);
}
function draw() {
    
    //hitzone else
    //leaf1
    fill("green");
    ellipse(300,350,50,24);
    //stem1
    strokeWeight(1);
    fill("green");
    rect(265, 315, 14, 62);
   
    //leaf2
    fill("green");
    ellipse(245,288,50,24);
    //stem2
    strokeWeight(1);
    fill("green");
    rect(265, 240, 14, 75);
    
    //hitzone if
    //POT
    strokeWeight(2);
    fill("brown");
    rect(200, 400, 145, 275);
    rect(180, 375, 180, 50);
    
     //CLOSED FLOWER
    fill("green");
    ellipse(273,208,40,75);
    
    //OPEN FLOWER
    //Top
    strokeWeight(1);
    fill("pink");
    ellipse(272, 135, 80, 80);
    //Middle R
    ellipse(327, 170, 80, 80);
    //Middle L
    ellipse(219, 170, 80, 80);
    //bottom R
    ellipse(311, 228, 80, 80);
     //bottom L
    ellipse(233, 229, 80, 80);
    //center
    strokeWeight(1);
    fill("orange");
    ellipse(272, 190, 50, 50);

}