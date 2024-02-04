let initialLength = 100; // Initial length of the tree
let currentLength = 0; // Current length to draw
let growing = false; // Control flag

function setup() {
  createCanvas(400, 400);
  let growButton = createButton('Grow Tree');
  growButton.mousePressed(toggleGrowth);
}

function toggleGrowth() {
  // Toggle the growing state
  growing = !growing;
}
  
function draw() {
    background(255);
    translate(width / 2, height);
    stroke(139, 69, 19); // Brown color for the branch

    // Only draw and increase the length if in growing state
    if (growing) {
        currentLength += 0.5; // Increment the current drawing length
        if (currentLength > initialLength) {
        currentLength = initialLength; // Cap at the initial length
        }
    }

  branch(currentLength);
  }
  
function branch(len) {
    if (len <= 0) return; // Base case to stop drawing
  
    strokeWeight(map(len, 10, 100, 1, 10));
    line(0, 0, 0, -len);
    translate(0, -len);

    let newLen = len * 0.67;

     // Check if there's enough length left to draw more branches
    if (len > 1) {
        push();
        rotate(PI / 4);
        branch(newLen);
        pop();

        push();
        rotate(-PI / 4);
        branch(newLen);
        pop();
    } else {
        // Draw leaves at the ends
        fill(34, 139, 34);
        noStroke();
        ellipse(0, 0, 10, 4);
    }
  }  
