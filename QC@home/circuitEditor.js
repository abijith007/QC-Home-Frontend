class circuitEditor {
  constructor(h) {
    this.x = 0
    this.y = 0
    this.h = h
    this.g = createGraphics(windowWidth, this.h)
    this.tqd = 0
    this.aqd = 0
    this.gates_list = []
    this.separator = this.g.width*0.33
    this.gate_margin_left = this.g.width*0.06
    this.gate_margin_top = this.g.height*0.12
    this.gate_spacing = this.g.width*0.05
    this.jsonObj = {
      qureg : []
    }
    
    this.createCircuitEditor()
  }
  
  createCircuitEditor() {
    this.tqd = new totalQubitsDialog(this.separator*0.2, this.h*0.3, this.g)
    this.tqd.show()
    this.aqd = new activeQubitDialog(this.separator*0.55, this.h*0.3, this.tqd.getTotalQubits(), this.g)
    this.aqd.show()
    
    this.g.strokeWeight(12)
    this.g.stroke(170)
    this.g.line(this.separator, 0, this.separator, this.h)
    this.g.line(0, this.h, windowWidth, this.h)
    
    this.g.strokeWeight(4)
    for(let i = 0; i < 5; i++) {
      let x = this.separator+this.gate_margin_left+(i*(50+this.gate_spacing))
      let y = this.gate_margin_top
      let names = ['H', 'X', 'Y', 'Z', 'S']
      let c = [color(130, 210, 240),
               color(240, 220, 130),
               color(240, 220, 130),
               color(240, 220, 130),
               color(130, 230, 130)]
      let hp = [false, false, false, false, false]
      this.gates_list.push(new gate(x, y, names[i], c[i], this.g, hp[i]))
      this.gates_list[i].show()
    }
    
    for(let i = 0; i < 4; i++) {
      let x = this.separator+this.gate_margin_left+(i*(50+this.gate_spacing))
      let y = this.gate_margin_top+50+33
      let names = ['Rx', 'Ry', 'Rz', 'M']
      let c = [color(240, 160, 120),
              color(240, 160, 120),
              color(240, 160, 120),
              color(240, 80, 80)]
      let hp = [true, true, true, false]
      this.gates_list.push(new gate(x, y, names[i], c[i], this.g, hp[i]))
      this.gates_list[i+5].show()
    }
    
    this.updateQubitsToJSON(this.tqd.getTotalQubits())
  }
  
  updateQubitsToJSON(n) {
    this.jsonObj.qureg = []
    for(let i = 0; i < n; i++) {
      this.jsonObj.qureg.push([])
    }
  }
  
  show() {
    image(this.g, this.x, this.y)
  }
  
  click() {
    if(mouseX >= this.x && mouseX <= this.x+windowWidth) {
      if(mouseY >= this.y && mouseY <= this.y+this.h) {
        let updateTQD = this.tqd.click()
        if(updateTQD) {
          this.tqd.show()
          this.aqd.setTotalQubits(this.tqd.getTotalQubits())
          this.updateQubitsToJSON(this.tqd.getTotalQubits())
        }
        
        let updateAQD = this.aqd.click()
        if(updateAQD) {
          this.aqd.show()
        }
        
        for(let i = 0; i < 9; i++) {
          this.jsonObj = this.gates_list[i].click(this.jsonObj, this.aqd.getActiveQubit())
        }
        return [updateTQD, updateAQD]
      }
      return [false, false]
    }
    return [false, false]
  }
  
  getJsonObj() {
    return this.jsonObj
  }
  
  setJsonObj(jsonObj) {
    this.jsonObj = jsonObj
  }
}