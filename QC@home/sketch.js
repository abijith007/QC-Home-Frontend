let ce_height = 180
let updateCE = [false, false]

function mousePressed() {
  updateCE = ce.click()
  if(updateCE[0]) {
    cv.updateJsonObj(ce.getJsonObj())
  }
  sa.click()
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ce = new circuitEditor(ce_height)
  cv = new circuitVisualizer(ce_height, ce.getJsonObj())
  sa = new simulationArea(windowHeight-80, ce.getJsonObj())
}

function draw() {
  background(50);
  ce.show()
  cv.show()
  sa.show()
}
