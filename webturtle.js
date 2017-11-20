class Vec2D {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class TurtleContext {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx || canvas.getContext('2d');
		
		this.turtles = [];
	}
	
	addTurtle(turtle) {
		if (turtle instanceof Turtle) {
			this.turtles.push(turtle);
			turtle.setParent(this);
		}
	}
	
	nextAnimationFrame() {
		
	}
}

class Turtle {
	constructor() {
		this.x = 0;
		this.y = 0;
		
		this.rot = 0;
		this.parent = null;
		
		this.canvas = null;
		this.ctx = null;
	}
	
	setParent(context) {
		if (context instanceof TurtleContext) {
			this.parent = context;
			
			this.canvas = parent.canvas;
			this.ctx = parent.ctx;
		}
	}
	
	forward(distance) {
		this.x += Math.cos(this.rot) * distance;
		this.y += Math.sin(this.rot) * distance;
	}
	
	fd(distance) {this.forward(distance);}
	backward(distance) {this.forward(-distance);}
	bk(distance) {this.forward(-distance);}
	back(distance) {this.forward(-distance);}
	
	right(angle) {
		this.rot += angle * Math.PI / 180;
	}
	
	rt(angle) {this.right(angle);}
	left(angle) {this.right(-angle);}
	lt(angle) {this.right(-angle);}
	
	goto(x, y) {
		if (y) {
			this.x = x;
			this.y = y;
		} else {
			this.x = x.x;
			this.y = x.y;
		}
	}
	
	setpos(x, y) {this.goto(x, y);}
	setposition(x, y) {this.goto(x, y);}
	
	setx(x) {
		this.x = x;
	}
	
	sety(y) {
		this.y = y;
	}
	
	setheading(to_angle) {
		this.rot = to_angle * Math.PI / 180;
	}
	
	seth(to_angle) {this.setheading(to_angle);}
	
	home() {
		this.x = 0;
		this.y = 0;
		this.rot = 0;
	}
}