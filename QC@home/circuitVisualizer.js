class circuitVisualizer {
  constructor(y, jsonObj) {
    this.x = 0
    this.y = y
    this.h = windowHeight - 80 - y
    this.g = createGraphics(windowWidth, this.h)
    this.jsonObj = jsonObj

    this.top_margin = this.g.height / (2 * this.jsonObj.qureg.length)
    this.wire_spacing = 2 * this.top_margin

    this.gate_left_margin = 80
    this.gate_spacing = 20
    this.gate_width = 50
    this.gateColors = [color(130, 210, 240),
                       color(240, 220, 130),
                       color(240, 220, 130),
                       color(240, 220, 130),
                       color(130, 230, 130),
                       color(240, 160, 120),
                       color(240, 160, 120),
                       color(240, 160, 120),
                       color(240, 80, 80)]
  }

  show() {
    this.g.background(40)
    this.g.strokeWeight(12)
    this.g.stroke(170)
    this.g.line(0, this.h, windowWidth, this.h)

    this.top_margin = this.g.height / (2 * this.jsonObj.qureg.length)

    this.wire_spacing = 2 * this.top_margin

    this.g.strokeWeight(2)
    for (let i = 0; i < this.jsonObj.qureg.length; i++) {
      let x1 = 50
      let y1 = this.top_margin + (i * (this.wire_spacing))
      let x2 = (10 * windowWidth) - 50
      this.g.line(x1, y1, x2, y1)

      this.g.fill(255)
      this.g.stroke(255)
      this.g.strokeWeight(1)
      this.g.textAlign(CENTER)
      this.g.textSize(24)
      this.g.text('|0\u232A', x1 - 20, y1 + (8))
    }

    for (let i = 0; i < this.jsonObj.qureg.length; i++) {
      for (let j = 0; j < this.jsonObj.qureg[i].length; j++) {
        let x1 = this.gate_left_margin + (j * (this.gate_width+this.gate_spacing))
        let y1 = this.top_margin + (i * (this.wire_spacing)) - this.gate_width/2
        let c = color(0, 0, 0)
        let gate_def = this.jsonObj.qureg[i][j].split('(')
        
        switch(gate_def[0]) {
          case 'H': c = this.gateColors[0]; break;
          case 'X': c = this.gateColors[1]; break;
          case 'Y': c = this.gateColors[2]; break;
          case 'Z': c = this.gateColors[3]; break;
          case 'S': c = this.gateColors[4]; break;
          case 'Rx': c = this.gateColors[5]; break;
          case 'Ry': c = this.gateColors[6]; break;
          case 'Rz': c = this.gateColors[7]; break;
          case 'M': c = this.gateColors[8]; break;
        }
        
        
        this.g.fill(40)
        this.g.strokeWeight(6)
        this.g.stroke(c)
        this.g.rect(x1, y1, this.gate_width, this.gate_width, 10, 10, 10, 10)
        this.g.strokeWeight(2)
        this.g.textSize(24)
        this.g.textAlign(CENTER)
        this.g.fill(c)
        if(gate_def.length > 1) {
          this.g.text(gate_def[0], x1+this.gate_width/2, y1+this.gate_width*0.5)
          this.g.textSize(14)
          this.g.strokeWeight(1)
          this.g.text(gate_def[1].split(')')[0], x1+this.gate_width/2, y1+this.gate_width*0.8)
        }
        else {
          this.g.text(gate_def[0], x1+this.gate_width/2, y1+this.gate_width*0.65)
        }
      }
    }

    image(this.g, this.x, this.y)
  }

  updateJsonObj(jsonObj) {
    this.jsonObj = jsonObj
  }
}