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
  background(0, 0, 128);
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

  let amplitudeFactor = map(micLevel, 0, 255, 100, 500);
  //rect(0, height - barHeight, width, barHeight); // Draw a bar representing the mic level



  //Rasterim Hintergrund
  // for (let i = 0; i < 300; i++) {
  //   //console.log (i)
  //   stroke(0);
  //   strokeWeight(1); // Horizintale Linien im Hintergrund
  //   line(0, i * 6, 800, i * 6);
  // }

  if (frameCount % 50 == 0) { //Geschwindigkeit anpassen, je höher prozent desto langsamer
    y2Random = random(0, 800); // für verschiedene Formen
    y3Random = random(0, 800); // für verschiedene Formen
  }


  //Wellen Gross im Hintergrund in Bewegung durch random
  noFill();
  stroke(0, 50); //Durcheinander mit Transparenz
  strokeWeight(250);
  bezier(0, y2Random * 2, 400, 200, 200, 400, 600, y3Random * 2);
  //bezier(0,100,400,300,200,20,600,100);

  noFill();
  stroke(0, 60); //Durcheinander mit Transparenz
  strokeWeight(500);
  bezier(-100, y2Random * 2, 4, 100, 900, 50, 600, y3Random * 2);

  noFill();
  stroke(255, 255, 255, 20); //Durcheinander mit Transparenz
  strokeWeight(1111);
  bezier(0, y2Random * 2, 800, 500, 200, 50, 600, y3Random * 2);


  //Wellen mit Volumensensor
  for (let y = 0; y < height; y++) { //y sintax für die verschiebung der Höhe
    noFill();
    stroke(0, 200, 255, 50);
    strokeWeight(5);
    bezier(0, y * 40, amplitudeFactor, y * 40 + 500, amplitudeFactor, y * 40 - 600, 600, y * 40);
  }

  for (let y = 0; y < height; y++) { //y sintax für die verschiebung der Höhe
    noFill();
    stroke(0, 200, 255, 50);
    strokeWeight(15);
    bezier(0, y * 200, amplitudeFactor, y * 200 + 500, amplitudeFactor, y * 200 - 600, 600, y * 200)
  }

  //Welle 5
  for (let i6 = 0; i6 < 1; i6++) {
    noFill();
    stroke(0, 0, 255, 30);
    strokeWeight(0);
    bezier(0, 500, 500, amplitudeFactor, 500, amplitudeFactor, 600, 500);
  }


  //Schiff bei interaktion

  for (let i2 = 0; i2 < 60; i2++) {
    stroke(0, 0, 0,);
    strokeWeight(1);
    fill(50, 50, 50);
    rect(mouseX, mouseY, 50, 15, 2, 2, 100); //hinteren Zahlen die Runden Ecken
    rect(mouseX + 20, mouseY - 7, 15, 7, 2);

  }

  // ✅ Async function outside draw() to call listenMic
  async function getMicLevel() {
    micLevel = await micInstance.listenMic();
  }

}
