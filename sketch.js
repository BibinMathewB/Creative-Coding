function setup() {
  createCanvas(800, 600);
  noLoop();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  // Set up font and color
  textSize(64);
  textFont('Georgia');
  fill(0);

  // Draw main text
  text("Cool image", width / 2, height / 2);

  // Draw shadow effect
  fill(100, 100, 100, 150); // Gray with some transparency
  text("Cool Image", width / 2 + 5, height / 2 + 5);

  // Draw smaller repeated text
  fill(50);
  textSize(32);
  for (let i = 0; i < 8; i++) {
    text("Nice", random(width), random(height));
  }

  // Draw a grid of letters
  fill(0, 102, 153, 51);
  textSize(24);
  for (let y = 50; y < height; y += 50) {
    for (let x = 50; x < width; x += 50) {
      text("T", x, y);
    }
  }
}
