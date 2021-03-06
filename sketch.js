var rings = [];
var col1;
var col2;
var col3;
var colours;
var lineArc;

function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
	colorMode(HSL)
	background(17, 33, 95);
	col1 = color(17, 4, 61);
	col2 = color(244, 87, 35);
	col3 = color(17, 100, 49);
	colours = [col1, col2, col3];
}

function draw() {
	for (let j = 0; j < 5; j++) {
		rings[j] = new Arc;
		rings[j].show();
	}
	noLoop();
}

class Arc {
	constructor() {
		this.ring = floor(random(1, 8));
		this.c = random(10, 300);
		this.rscale = random(30, 250);
		this.off = random(0, 360);
	}

	show() {
		noFill();
		stroke(colours[floor(random(0, 3))]);
		strokeWeight(0.5);
		for (let i = 0 + this.off; i < this.off + (360/this.ring); i+= 360/this.c) {
			push();
			this.r = noise(i) * 15 + this.rscale;
			this.x = this.r * cos(i) + (width/2);
			this.y = this.r * sin(i) + (width/2);
			translate(this.x, this.y);
			rotate(i + random(80, 100));
			rect(0, 0, 3, 40);
			pop();
		}
	}
}

function keyTyped() {
	if (key === 's') {
			save('canvas.gif');
  }
}