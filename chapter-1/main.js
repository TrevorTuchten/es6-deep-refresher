$(document).ready(function() {
	'use strict';

// initialize paper.js
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	
// draw a circle with x, y, radius
	/*let c = Shape.Circle(200, 200, 50);
	c.fillColor = 'green';*/

// for loop to draw multiple circles
	/*let c;
	for (let x = 25; x < 400; x += 50) {
		for (let y = 25; y < 400; y += 50) {
			c = Shape.Circle(x, y, 20);
			c.fillColor = 'green';
		}
	}*/

// paper.js event handler
	/*let tool = new Tool();

// draw circle on user mouse click in mainCanvas
	tool.onMouseDown = function(event) {
		let c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor = 'green';
	}*/

// hello world app 
	let c = Shape.Circle(200, 200, 80);
	c.fillColor = 'black';
	let text = new PointText(200, 200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'hello world';

	paper.view.draw();
});
