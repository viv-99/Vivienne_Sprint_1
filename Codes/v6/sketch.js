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
  background(255);
  fill(0)

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

  let amplitudeFactor  = map(micLevel, 0, 255, 100,500);
  //rect(0, height - barHeight, width, barHeight); // Draw a bar representing the mic level

  // Draw a bar representing the mic level
 
//Rasterim Hintergrund
for (let i = 0; i < 300; i++) {
  //console.log (i)
 
  stroke(0);
  strokeWeight(3); // Horizintale Linien
  line(0, i*6, 800 ,i *6);}

  if (frameCount % 20 == 0) { //Geschwindigkeit anpassen, je höher prozent desto langsamer
  y2Random = random (100, 500);
  y3Random = random (100, 500);
}

//Welle 1
for (let i2 = 0; i2 < 30; i2++){
  push();
  noFill();
  stroke(0);
  strokeWeight(3);
  bezier(0, i2*8, 300, amplitudeFactor, 500, amplitudeFactor, 600, i2*8);
  pop();
}

//Welle 2
  for (let i3 = 0; i3 < 20; i3++){
  push();
  noFill();
  stroke(255);
  
  strokeWeight(3);
  bezier(0, i3*100, 200, amplitudeFactor, 500, amplitudeFactor, 600, i3*100);
  pop();
}

//Welle 3
for (let i4 = 0; i4 < 2; i4++){

  noFill();
  stroke(0);
  strokeWeight(3);
  bezier(0, 0, 300, amplitudeFactor, 500, amplitudeFactor, 600, 0);

}

//Welle 4
for (let i5 = 0; i5 < 2; i5++){

  noFill();
  stroke(0);
  strokeWeight(3);
  bezier(50, 0, 500, amplitudeFactor, 600, amplitudeFactor, 600, 20);


}

// ✅ Async function outside draw() to call listenMic
async function getMicLevel() {
  micLevel = await micInstance.listenMic();
}

}