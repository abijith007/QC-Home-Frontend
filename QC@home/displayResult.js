class resultDisplay {
	constructor() {
		this.result_str = ""
		this.res_probabs = {
			probabilities : []
		}

		this.btnX = windowWidth/4
		this.btnY = 7*windowHeight/8
		this.btnW = windowWidth/2
		this.btnH = windowHeight/10

		this.graph_left_margin = 40
	}

	setResProbabs(res_probabs) {
		this.res_probabs = res_probabs
	}

	getResults() {
		// Function for listening to asynchronous response from server
		// To be filled by @AbijithTR
		let jsonObj_from_server = {
			probabilities : [[0, 55], [1, 15], [2, 0], [3, 5],
							 [4, 7], [5, 0], [6, 8], [7, 10]]
		}
		this.res_probabs = jsonObj_from_server
	}

	drawHistogram() {
		background(40)
		strokeWeight(3)
		stroke(255)
		fill(60)
		rect(this.graph_left_margin, windowHeight/4, windowWidth-this.graph_left_margin-10, windowHeight/2)


		let num_counts = min(this.res_probabs.probabilities.length, 32)
		let div_size = (windowWidth-this.graph_left_margin-10)/(num_counts+1)
		let originX = this.graph_left_margin
		let originY = 3*windowHeight/4

		// Graph markings
		for(let i = 0; i < num_counts; i++) {
			let x1 = originX+(div_size*(i+1))
			let y1 = originY-5
			let y2 = originY+5

			strokeWeight(1)
			line(x1, y1, x1, y2)
			textAlign(CENTER)
			textSize(14)
			fill(255)
			text(this.res_probabs.probabilities[i][0], x1, y2+20)

			let bar_h = windowHeight/2 * this.res_probabs.probabilities[i][1]/100
			noStroke()
			fill(240, 208, 122)
			rect(x1 - div_size/2, originY - bar_h, div_size-(80/num_counts), bar_h)

			textAlign(CENTER)
			textSize(12)
			text(this.res_probabs.probabilities[i][1]+'%', x1, y1 - bar_h)
		}
		noFill()
		strokeWeight(3)
		stroke(255)
		rect(this.graph_left_margin, windowHeight/4, windowWidth-this.graph_left_margin-10, windowHeight/2)

		strokeWeight(2)
		let y1 = windowHeight/2
		let y2 = 3*windowHeight/8
		let y3 = 5*windowHeight/8
		let y4 = windowHeight/4
		let x1 = originX-5
		let x2 = originX+5
		line(x1, y1, x2, y1)
		line(x1, y2, x2, y2)
		line(x1, y3, x2, y3)
		line(x1, y4, x2, y4)
		line(x1, originY, x2, originY)

		strokeWeight(1)
		fill(255)
		textAlign(CENTER)
		textSize(14)
		text('50%', x1-15, y1)
		text('75%', x1-15, y2)
		text('25%', x1-15, y3)
		text('0%', x1-15, originY)
		text('100%', x1-15, y4)



		strokeWeight(6)
		stroke(100, 255, 120)
		fill(40)
		rect(this.btnX, this.btnY, this.btnW, this.btnH, 10, 10, 10, 10)
		fill(100, 255, 120)
		strokeWeight(1)
		textAlign(CENTER)
		textSize(36)
		text('Go back to Circuit Editor', this.btnX+this.btnW/2, this.btnY+this.btnH*0.65)
	}

	click() {
		if(mouseX >= this.btnX && mouseX <= this.btnX+this.btnW) {
			if(mouseY >= this.btnY && mouseY <= this.btnY+this.btnH) {
				return 'circuit'
			}
			return 'result'
		}
		return 'result'
	}
}