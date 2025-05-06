let s1 = 0

function setup() {
    createCanvas(600, 1000)
    background(0)
   
   // BLEND 
   //blendMode(Exclusion);

}
function draw() { 
  
  
  //Rasterim Hintergrund
  for (let i = 0; i < 300; i++) {
  

  //console.log (i)
 
  stroke(255);
  strokeWeight(3); // Horizintale Linien
  line(0, i*6, 600 ,i *6);

  stroke(255);
  strokeWeight(1);  //Vertikale Linien
  line(i*10, 400, i*100 , 1200); }
  

  // Kreise
  for (let i2 = 0; i2 < 40; i2++){
  console.log (i2) 

  noFill(); // schwarzer Kreiss
  strokeWeight(1);
  ellipse(400, 600, i2*10, i2*3);

  push(); // farbiger Kreis
  stroke(95,158,160);
  
  strokeWeight(1.5);
  ellipse(100, 800, i2*10, i2*3);
  pop();}


  
  // Dreiecke
 
  /*for (let i3 = 0; i3 <3; i3++){
  
  push();
  noStroke();
  fill(255,215,0,10);
  triangle(i3 *500, 300, i3 *102, 120, i3 *82, 175);
  pop(); 
} */

  // Kurve
  
  //stroke(255);
  //strokeWeight(24);
  //point(0,300);
  //point(100,100);
  //point(400,400);
  //point(600,300);

  for(let i4=0; i4 < 50; i4++) {

    

  //blendMode(BLEND);
  push();

  stroke(0);
  strokeWeight(3);
  bezier(0, i4 * 15 , 100, 100, 400, 400, 600, i4 * 15);

  stroke(255);
  strokeWeight(1);
  //bezier(600, i4 * 2 , 400, 400, 20, 20, 0, i4 * 2);

  pop();
}



 

  
  
}


function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'jpg');
  }
}