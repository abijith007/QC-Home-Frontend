class gate {
  constructor(x, y, name, color, g, has_param) {
    this.x = x
    this.y = y
    this.name = name
    this.w = 50
    this.color = color
    this.g = g
    this.param_val = null
    this.has_param = has_param
  }
  
  show() {
    this.g.fill(40)
    this.g.strokeWeight(6)
    this.g.stroke(this.color)
    this.g.square(this.x, this.y, this.w, 10, 10, 10, 10)
    this.g.strokeWeight(2)
    this.g.textSize(24)
    this.g.textAlign(CENTER)
    this.g.fill(this.color)
    this.g.text(this.name, this.x+this.w/2, this.y+this.w*0.65)
  }
  
  click(jsonObj, active_qb) {
    if(mouseX >= this.x && mouseX <= this.x+this.w) {
      if(mouseY >= this.y && mouseY <= this.y+this.w) {
        if(this.has_param) {
          let angle = 10
          while(angle > PI || angle < -PI) {
            angle = prompt("Enter an angle 'x' for rotation gate(-π < x < π):")
          }
          if(angle == null) {angle = 0}
          this.param_val = angle
          jsonObj.qureg[active_qb].push(this.name+'('+this.param_val.toLowerCase()+')')
        }
        else {
          jsonObj.qureg[active_qb].push(this.name)
        }
      }
    }
    return jsonObj
  }
}