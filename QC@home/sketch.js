let ce_height = 180
let updateCE = [false, false]
let state = 'circuit'

function mousePressed() {
  if(state == 'circuit') {
    updateCE = ce.click()
    if(updateCE[0]) {
      cv.updateJsonObj(ce.getJsonObj())
    }
    state = sa.click()
  }
  else if(state == 'result') {
    state = rd.click()
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ce = new circuitEditor(ce_height)
  cv = new circuitVisualizer(ce_height, ce.getJsonObj())
  sa = new simulationArea(windowHeight-80, ce.getJsonObj())
  rd = new resultDisplay(0, windowHeight/4)
}

function draw() {
  background(40);

  if(state == 'circuit') {
    ce.show()
    cv.show()
    sa.show()
  }
  else if(state == 'result') {
    rd.getResults()
    rd.drawHistogram()
  }
}
