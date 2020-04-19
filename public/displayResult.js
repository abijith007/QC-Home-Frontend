const SERVER_URL = "http://localhost:4000";

const KEY = "$2y$12$VLuo7sR8tzzoRwgDgG8xsuXOpDNFpLX76z5vY4d7tW/xiq73rWAOq";

class resultDisplay {
  constructor() {
    this.res_probabs = {
      probabilities: [],
      time: "",
    };

    this.btnX = windowWidth / 4;
    this.btnY = (7 * windowHeight) / 8;
    this.btnW = windowWidth / 2;
    this.btnH = windowHeight / 10;

    this.saveX = windowWidth * 0.8;
    this.saveY = (7 * windowHeight) / 8;
    this.saveW = windowWidth * 0.15;
    this.saveH = windowHeight / 15;

    this.graph_left_margin = 40;
  }

  setResProbabs(res_probabs) {
    this.res_probabs = res_probabs;
  }

  getResults(jsonObj_col) {
    background(40);
    textSize(72);
    fill(240, 208, 122);
    strokeWeight(2);
    stroke(240, 208, 122);
    textAlign(CENTER);
    text("Loading...", windowWidth / 2, windowHeight / 2);

    noLoop();
    var jsonObj_from_server;

    jsonObj_col.key = KEY;
    (async () => {
      const rawResponse = await fetch("http://localhost:4000/data", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonObj_col),
      });
      jsonObj_from_server = await rawResponse.json();

      this.res_probabs = jsonObj_from_server;
    })();

    setTimeout(() => {
      loop();
    }, 2000);
    ////////////////////////
  }

  drawHistogram() {
    background(40);
    strokeWeight(3);
    stroke(255);
    fill(60);
    rect(
      this.graph_left_margin,
      windowHeight / 4,
      windowWidth - this.graph_left_margin - 10,
      windowHeight / 2
    );

    let num_counts = min(this.res_probabs.probabilities.length, 32);
    let div_size =
      (windowWidth - this.graph_left_margin - 10) / (num_counts + 1);
    let originX = this.graph_left_margin;
    let originY = (3 * windowHeight) / 4;
    let displaying_full = true;

    if (num_counts !== this.res_probabs.probabilities.length) {
      displaying_full = false;
    }

    // Graph
    for (let i = 0; i < num_counts; i++) {
      let x1 = originX + div_size * (i + 1);
      let y1 = originY - 5;
      let y2 = originY + 5;

      strokeWeight(1);
      line(x1, y1, x1, y2);
      textAlign(CENTER);
      textSize(14);
      fill(255);
      text(this.res_probabs.probabilities[i][0], x1, y2 + 20);

      let bar_h =
        ((windowHeight / 2) * this.res_probabs.probabilities[i][1]) / 100;
      noStroke();
      fill(240, 208, 122);
      rect(
        x1 - div_size / 2,
        originY - bar_h,
        div_size - 80 / num_counts,
        bar_h
      );

      textAlign(CENTER);
      textSize(12);
      text(this.res_probabs.probabilities[i][1] + "%", x1, y1 - bar_h);
    }
    noFill();
    strokeWeight(3);
    stroke(255);
    rect(
      this.graph_left_margin,
      windowHeight / 4,
      windowWidth - this.graph_left_margin - 10,
      windowHeight / 2
    );

    strokeWeight(2);
    let y1 = windowHeight / 2;
    let y2 = (3 * windowHeight) / 8;
    let y3 = (5 * windowHeight) / 8;
    let y4 = windowHeight / 4;
    let x1 = originX - 5;
    let x2 = originX + 5;
    line(x1, y1, x2, y1);
    line(x1, y2, x2, y2);
    line(x1, y3, x2, y3);
    line(x1, y4, x2, y4);
    line(x1, originY, x2, originY);

    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(14);
    text("50%", x1 - 15, y1);
    text("75%", x1 - 15, y2);
    text("25%", x1 - 15, y3);
    text("0%", x1 - 15, originY);
    text("100%", x1 - 15, y4);

    if (!displaying_full) {
      let caution_msg =
        "Displaying 32/" +
        this.res_probabs.probabilities.length +
        " states in the result. Click 'Save Results' button to see more...";
      noStroke();
      textSize(18);
      text(caution_msg, windowWidth / 2, windowHeight * 0.82);
    }

    // Button 1
    strokeWeight(6);
    stroke(100, 255, 120);
    fill(40);
    rect(this.btnX, this.btnY, this.btnW, this.btnH, 10, 10, 10, 10);
    fill(100, 215, 120);
    strokeWeight(1);
    textAlign(CENTER);
    textSize(36);
    text(
      "Go back to Circuit Editor",
      this.btnX + this.btnW / 2,
      this.btnY + this.btnH * 0.65
    );

    // Button 2
    strokeWeight(4);
    stroke(200, 80, 80);
    fill(40);
    rect(this.saveX, this.saveY, this.saveW, this.saveH, 10, 10, 10, 10);
    fill(200, 80, 80);
    strokeWeight(1);
    textAlign(CENTER);
    textSize(28);
    text(
      "Save Results",
      this.saveX + this.saveW / 2,
      this.saveY + this.saveH * 0.65
    );

    // Time taken
    noStroke();
    fill(0, 128, 255);
    textSize(36);
    textAlign(CENTER);
    text(
      "Time taken: " + this.res_probabs.time,
      windowWidth / 2,
      windowHeight * 0.125
    );
  }

  click() {
    if (mouseX >= this.btnX && mouseX <= this.btnX + this.btnW) {
      if (mouseY >= this.btnY && mouseY <= this.btnY + this.btnH) {
        return "circuit";
      }
      return "result";
    }
    return "result";
  }

  save() {
    if (mouseX >= this.saveX && mouseX <= this.saveX + this.saveW) {
      if (mouseY >= this.saveY && mouseY <= this.saveY + this.saveH) {
        saveJSON(this.res_probabs, "results.json");
      }
    }
  }
}
