/* 
+Colabor 2025 HSLU, Hanna Zuellig
Example Custom Audio Class for p5.js
Custom class creates a button to start the microphone
Custom class is to be embedded in index.html and put into library folder
*/

/**
 * Die Variable Mikrofon bindet eine Instanz der Klasse Mic
 * Die Variable micLevel nimmt die aktuelle Lautstärke zurück, von 0 bis 255
 */


let micInstance;
let micLevel = 0;
let y2Random = 300; //Chatgbt said that for Geschwindigekeit
let y3Random = 300; //Chatgbt said that for Geschwindigekeit

function setup() {
  createCanvas(600, 800);

  /**
   * Im setup einmalig Zugriff auf das Mikrofon
   */
  micInstance = new Mic("Start Mic"); //Parameter übergibt Beschriftung des Buttons
}

function draw() {
  push();
  background(0,0,128);
  fill(0)
  pop();
  /**
    * User muss mit der Seite interagieren, um Zugriff auf das Mikrofon zu erhalten
    */
  if (micInstance && micInstance.started) {
    /**
    * In jedem Frame wird die aktuelle Lautstärke erfragt 
    * Werte die zurückkommen, gehen von 0 bis 255
    * allenfalls umwandeln
    */
    getMicLevel();
  }

  let amplitudeFactor  = map(micLevel, 0, 255, 100, 500);
  //rect(0, height - barHeight, width, barHeight); // Draw a bar representing the mic level

  // Draw a bar representing the mic level
 
//Rasterim Hintergrund
 for (let i = 0; i < 300; i++) {
  //console.log (i)
 
  stroke(0);
  strokeWeight(0); // Horizintale Linien
  line(0, i*6, 800 ,i *6);}

  if (frameCount % 50 == 0) { //Geschwindigkeit anpassen, je höher prozent desto langsamer
  y2Random = random (100, 500);
  y3Random = random (100, 500);
}
 /*
 //WELLEN Hintergrund
  for (let i6 = 0; i6 < 300; i6++){
  noFill();
  //blendMode(HARD_LIGHT);
  stroke(0);
  strokeWeight(1);
  bezier(0, i6*30, 500, 380, 250, 820, 600, i6*30);
 
}

for (let i6 = 0; i6 < 300; i6++){
  noFill();
  //blendMode(HARD_LIGHT);
  stroke(0);
  strokeWeight(1);
  bezier(-100, -i6*30, 380, 1200, 820, 250, 600, -i6*30);
} */

//
//Welle 1
for (let i2 = 0; i2 < 1; i2++){
  push();
  
  noFill();
  stroke(0,0,255,70);
  strokeWeight(200);
  bezier(0, 300, 300, amplitudeFactor, 500, amplitudeFactor, 600, 300);
  pop();
}

//Welle 2
  for (let i3 = 0; i3 < 1; i3++){
  push();
  noFill();
  stroke(0,100,255,80);
  strokeWeight(190);
  bezier(0, 600, 200, amplitudeFactor, 500, amplitudeFactor, 600, 900);
  pop();
}

//Welle 3
for (let i4 = 0; i4 < 1; i4++){

  noFill();
  stroke(0,200,255,50);
  strokeWeight(200);
  bezier(0, 0, 300, amplitudeFactor, 500, amplitudeFactor, 600, 0);

}

//Welle 4
for (let i5 = 0; i5 < 50; i5++){
  noFill();
  stroke(0,200,255, 80);
  strokeWeight(5);
  bezier(-400, i5*40, 50, amplitudeFactor, 2, amplitudeFactor, 600, i5*40);


}

//Welle 5
for (let i6 = 0; i6 < 1; i6++){
  noFill();
  stroke(0, 0, 255,30);
  strokeWeight(140);
  bezier(0, 500, 500, amplitudeFactor, 500, amplitudeFactor, 600, 500);
}



// ✅ Async function outside draw() to call listenMic
async function getMicLevel() {
  micLevel = await micInstance.listenMic();
}

}
