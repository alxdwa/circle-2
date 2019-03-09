var rings = [];
var col1;
var col2;
var col3;
var colours;

function setup() {
	createCanvas(600, 600, SVG);

	angleMode(DEGREES);
	colorMode(HSL)
	background(15, 100, 56);
	col1 = color(359, 0, 88);
	col2 = color(243, 99, 27)
	col3 = color(16, 72, 51);
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
for (let i = 0+this.off; i < this.off+(360/this.ring); i+= 360/this.c) {
	push();
	this.r = noise(i)*15 + this.rscale;
	this.x = this.r * cos(i) + (width/2);
	this.y = this.r * sin(i) + (width/2);
	translate(this.x, this.y);
	rotate(i+random(80, 100));
	rect(0, 0, 3, 40);
	pop();
	}
}
}
