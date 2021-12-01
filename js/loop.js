let y;
let num = 14;

function setup() {
  createCanvas(800, 800);
  noStroke();
  background(100);

  fill('#ABF9FF');
  y = 60;
  for (let i = 0; i < num / 3; i++) {
    rect(0, y, 805, 10);
    y += 40;
  }

  for (let i = 10; i < width; i += 5) {
    if (i % 20 === 0) {
      stroke('#a4daeb');
      line(i, 80, i, height / 2);
    } else {
      stroke('#88c6f1');
      line(i, 20, i, 180);
    }
  }
}
    function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  rect(mouseX, mouseY, 30, 30);
}


