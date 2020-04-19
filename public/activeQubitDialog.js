class activeQubitDialog {
  constructor(x, y, total_qubits, g) {
    this.x = x
    this.y = y
    this.w = 75
    this.h = 45
    this.total_qubits = total_qubits
    this.active = 0
    this.g = g
  }

  show() {
    this.g.fill(40)
    this.g.strokeWeight(4)
    this.g.stroke(255)
    this.g.rect(this.x, this.y, this.w, this.h, 10, 10, 10, 10)
    this.g.textSize(28)
    this.g.strokeWeight(1)
    this.g.textAlign(CENTER)
    this.g.fill(255)
    this.g.text(this.active, this.x + this.w / 2, this.y + this.h * 0.7)
    this.g.textSize(18)
    this.g.text('Wire to edit', this.x + this.w / 2, this.y + this.h * 1.8)
  }

  click() {
    if (mouseX >= this.x && mouseX <= this.x + this.w) {
      if (mouseY >= this.y && mouseY <= this.y + this.h) {
        let a = 50
        while (a > this.total_qubits-1 || a < 0) {
          let txt = "Enter total qubits to be used in the simulation:\n[Valid input:(0-"+(this.total_qubits-1)+")]"
          a = prompt(txt, '0')
        }
        if(a == null) {a = 0}
        this.active = a
        
        return true
      }
      return false
    }
    return false
  }
  
  setTotalQubits(num_qubits) {
    this.total_qubits = num_qubits
    this.active = 0
  }
  
  getActiveQubit() {
    return this.active
  }
}