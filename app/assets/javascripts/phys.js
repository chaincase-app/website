var canvas,
   	ctx,
   	w,
   	h,
   	world,
	textBody,
	floorBody, 
	ceilingBody, 
	rightWallBody, 
	leftWallBody,
  mouseConstraint,
	mouseBody;

var boxBodies = [];
var face = document.createElement('img');
face.src = 'assets/img/dannygouldface.gif';
face.alt = 'Danny Gould\'s face';
init();
animate();

function init() {
	// Init canvas
	canvas = document.getElementById("physCanvas");
	var intro = document.getElementById('intro');
	canvas.width = intro.clientWidth;
	canvas.height = intro.clientHeight;
	w = canvas.width;
	h = canvas.height;

	ctx = canvas.getContext("2d");
	ctx.lineWidth = 1;

	// Init p2.js
	world = new p2.World({gravity: [0, 980]});

	// Add walls
	 /*
	floorBody = new p2.Body({
		position: [0, -h / 2]
	});
	floorBody.addShape(new p2.Plane);
	world.addBody(floorBody);
*/
	ceilingBody = new p2.Body({
		position: [0, h / 2],
		angle: Math.PI
	});
	ceilingBody.addShape(new p2.Plane());
	world.addBody(ceilingBody);
	rightWallBody = new p2.Body({
		position: [w/2, 0],
		angle: Math.PI / 2
	});
	rightWallBody.addShape(new p2.Plane());
	world.addBody(rightWallBody);

	leftWallBody = new p2.Body({
		position: [-w/2, 0],
	   	angle: (3 * Math.PI) / 2
	});
	leftWallBody.addShape(new p2.Plane());
	world.addBody(leftWallBody);

	// Add a box
	addBox([0, canvas.width/3]);
	// Create a body for the cursor
	mouseBody = new p2.Body();
	world.addBody(mouseBody);

	canvas.addEventListener('mousedown', function(event){

	  // Convert the canvas coordinate to physics coordinates
	  var position = getPhysicsCoord(event);

	  // Check if the cursor is inside the box
	  var hitBodies = world.hitTest(position, boxBodies);

	  if(hitBodies.length) {

		// Move the mouse body to the cursor position
		mouseBody.position[0] = position[0];
		mouseBody.position[1] = position[1];

		// Create a RevoluteConstraint.
		// This constraint lets the bodies rotate around a common point
		mouseConstraint = new p2.RevoluteConstraint(mouseBody, hitBodies[0], {
		  worldPivot: position,
		  collideConnected:false
		});
		world.addConstraint(mouseConstraint);
    console.log(world);
	  } else {
		  addBox([position[0], position[1]]);
		  // if 3 heads or more
		  if (world.bodies.length === 7) {
			$('div').remove('.pulse');
		  }
	  }
	});

	// Sync the mouse body to be at the cursor position
	canvas.addEventListener('mousemove', function(event){
	  var position = getPhysicsCoord(event);
	  mouseBody.position[0] = position[0];
	  mouseBody.position[1] = position[1];
	});

	// Remove the mouse constraint on mouse up
	canvas.addEventListener('mouseup', removeMouseConstraint);
	canvas.addEventListener('mouseout', removeMouseConstraint, false);

}
function addBox(position) {	
	vertices = [
		[48,9],
		[33,45],
		[17,68],
	   	[0,66],
	   	[-15, 60],
		[-37, 35],
		[-50, 10],
		[-43, -18],
		[-30, -38],
		[0, -48],
	   	[28,-44],
	   	[48,-16]
	]
	convexShape = new p2.Convex({vertices: vertices})
	boxBodies.push(new p2.Body({
		mass:1,
		position:position,
		angularVelocity:1
	}));
	boxBodies[boxBodies.length - 1].addShape(convexShape);
	world.addBody(boxBodies[boxBodies.length - 1]);
}


function removeMouseConstraint(event) {
  // remove all in case mouse up happens off screen
  world.constraints.forEach(function(constraint) {
    world.removeConstraint(constraint);
  })
	mouseConstraint = null;
}

// Convert a canvas coordiante to physics coordinate
function getPhysicsCoord(mouseEvent){
  var rect = canvas.getBoundingClientRect();
  //TODO
  var x = mouseEvent.clientX - rect.left;
  var y = mouseEvent.clientY - rect.top;

  x = (x - w / 2);
  y = (y - h / 2);

  return [x, y];
}

function drawbox(){
	for(i = 0; i < boxBodies.length; i++) {
		ctx.beginPath();
		var x = boxBodies[i].position[0],
			y = boxBodies[i].position[1];
		ctx.save();
		ctx.translate(x, y);        // Translate to the center of the box
		ctx.rotate(boxBodies[i].angle);  // Rotate to the box body frame
		ctx.drawImage(face, -face.width/4, -face.height/4 + 10, face.width/2, face.height/2);
		ctx.rotate(Math.PI);
		/* draws vertices */
		/*
		for(j = 0; j < vertices.length; j++) {
			ctx.lineTo(-vertices[j][0], -vertices[j][1]);
		}	
		*/
		ctx.stroke();
		ctx.restore();

	}
}

function drawFloors(){

	var y = floorBody.position[1];
	ctx.moveTo(-w, y);
	ctx.lineTo( w, y);
	ctx.stroke();
}

function render(){
	// Clear the canvas
	ctx.clearRect(0,0,w,h);

	// Transform the canvas
	ctx.save();
	ctx.translate(w/2, h/2); // Translate to the center

	// Draw all bodies
	drawbox();
	//drawFloors();

	// Restore transform
	ctx.restore();
}

// Animation loop
function animate(){
	requestAnimationFrame(animate);

	// Move physics bodies forward in time
	world.step(1/60);

	// Render scene
	render();
}
