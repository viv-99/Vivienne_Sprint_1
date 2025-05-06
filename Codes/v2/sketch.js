let s1 = 0

function setup() {
    createCanvas(600, 1000)
    background(70,130,180)
   
}
function draw() { 
  
  //Rasterim Hintergrund
  for (let i = 0; i < 200; i++) {
  //console.log (i)

  strokeWeight(1) // Horizintale Linien
  line(0, i*8, 600 ,i *8);
  
  strokeWeight(1)  //Vertikale Linien
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
 
  for (let i3 = 0; i3 <3; i3++){
  
  push();
  noStroke();
  fill(255,215,0,10);
  triangle(i3 *500, 300, i3 *102, 120, i3 *82, 175);
  pop();
}

  // Kurve
  
  //stroke(255);
  //strokeWeight(24);
  //point(0,300);
  //point(100,100);
  //point(400,400);
  //point(600,300);

  for(let i4=0; i4 < 100; i4++) {
  push();

  stroke(255);
  strokeWeight(1);
  bezier(0, i4 * 8 , 100, 100, 400, 400, 600, i4 * 8);

  stroke(255);
  strokeWeight(1);
  bezier(600, i4 * 2 , 400, 400, 20, 20, 0, i4 * 2);

  pop();
}

  // Würfel
  
  noStroke();
  fill(255,69,0, 3);
  rect(20, 400, 140, 302,20);

  noStroke();
  fill(255,69,0,8);
  rect(10, 400, 110, 302,20);

  // Würfel mit Kurven drüber
  
  for (let i5=4; i5 < 20; i5++){

    stroke(0);
    strokeWeight(1);
    noFill();
    bezier(400, i5*90, 500 , 1000, 200, 700, i5*70, 950)

  }



  push();
  stroke(1);
  strokeWeight(3)
  noFill();
  rect(400, 800, 150, 150,);


  pop();
  
}


function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'jpg');
  }
}