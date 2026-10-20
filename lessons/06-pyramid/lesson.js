function drawPyramid(height) {
  for (let row = 1; row <= height; row += 1) {
    const spaces = ' '.repeat(height - row);
    const stars = '*'.repeat(row * 2 - 1);
    console.log(spaces + stars);
  }
}

drawPyramid(5);
