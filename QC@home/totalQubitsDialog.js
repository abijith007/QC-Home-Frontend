class totalQubitsDialog {
  constructor(x, y, g) {
    this.x = x
    this.y = y
    this.w = 75
    this.h = 45
    this.qbCount = 2
    this.g = g
  }

  show() {
    this.g.fill(50)
    this.g.strokeWeight(4)
    this.g.stroke(255)
    this.g.rect(this.x, this.y, this.w, this.h, 10, 10, 10, 10)
    this.g.textSize(28)
    this.g.strokeWeight(1)
    this.g.textAlign(CENTER)
    this.g.fill(255)
    this.g.text(this.qbCount, this.x + this.w / 2, this.y + this.h * 0.7)
    this.g.textSize(18)
    this.g.text('Total qubits', this.x + this.w / 2, this.y + this.h * 1.8)
  }

  click() {
    if (mouseX >= this.x && mouseX <= this.x + this.w) {
      if (mouseY >= this.y && mouseY <= this.y + this.h) {
        let qbs = 50
        while (qbs > 10 || qbs < 2) {
          qbs = prompt('Enter total qubits to be used in the simulation:\n[Valid input:(2-10)]', '2')
        }
        this.qbCount = qbs
        return true
      }
      return false
    }
    return false
  }
  
  getTotalQubits() {
    return this.qbCount
  }
}