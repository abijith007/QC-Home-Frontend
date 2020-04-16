let ce_height = 180
let updateCE = [false, false]
let state = 'circuit'
let prev_state = state

function mousePressed() {
  if(state == 'circuit') {
    updateCE = ce.click()
    if(updateCE[0]) {
      cv.updateJsonObj(ce.getJsonObj())
      updateCE = [false, false]
    }
    state = sa.click()
  }
  else if(state == 'result') {
    rd.save()
    state = rd.click()
    console.log('ce:', ce.getJsonObj())
    console.log('sa:', sa.getJsonObjCol())
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
    prev_state = state
  }
  else if(state == 'result') {
    if(prev_state == 'circuit') {
      rd.getResults(sa.getJsonObjCol())
    }
    if(prev_state == state) {
      rd.drawHistogram()
    }
    prev_state = state
  }
}
