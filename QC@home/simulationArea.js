class simulationArea {
  constructor(y, jsonObj) {
    this.x = 0;
    this.y = y;
    this.h = 80;
    this.g = createGraphics(windowWidth, this.h);
    this.jsonObj_row = jsonObj;
    this.jsonObj_col = {
      cols: [],
    };

    this.createSimulationArea();
  }

  createSimulationArea() {
    this.g.background(40);
    this.g.strokeWeight(5);
    this.g.stroke(100, 215, 120);
    this.g.fill(50);
    this.g.rect(
      windowWidth / 2 - 140,
      this.g.height - 65,
      280,
      55,
      10,
      10,
      10,
      10
    );
    this.g.textAlign(CENTER);
    this.g.textSize(38);
    this.g.fill(100, 215, 120);
    this.g.noStroke()
    this.g.text("Run the circuit", windowWidth / 2, this.g.height / 2 + 15);  
  }

  show() {
    image(this.g, this.x, this.y);
  }

  resetJsonObjCol() {
    this.jsonObj_col = {
      cols : []
    }
  }

  click() {
    if (mouseX >= windowWidth / 2 - 140 && mouseX <= windowWidth / 2 + 140) {
      if (mouseY >= windowHeight - 65 && mouseY <= windowHeight - 10) {
        this.resetJsonObjCol()
        for (let i = 0; i < this.jsonObj_row.qureg.length; i++) {
          for (let j = 0; j < this.jsonObj_row.qureg[i].length; j++) {
            if (i == 0) {
              this.jsonObj_col.cols.push([]);
              this.jsonObj_col.cols[j].push(this.jsonObj_row.qureg[i][j]);
            } else {
              if (j < this.jsonObj_col.cols.length) {
                this.jsonObj_col.cols[j].push(this.jsonObj_row.qureg[i][j]);
              } else {
                this.jsonObj_col.cols.push([]);
                for (let k = 0; k < i; k++) {
                  this.jsonObj_col.cols[j].push("-");
                }
                this.jsonObj_col.cols[j].push(this.jsonObj_row.qureg[i][j]);
              }
            }
          }
        }
        return 'result';
      }
      return 'circuit'
    }
    return 'circuit'
  }

  getJsonObjCol() {
    return this.jsonObj_col
  }
}
