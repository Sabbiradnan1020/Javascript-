const canvas = document.getElementById('canvas');
const colorPicker = document.getElementById('colorPicker');
const pixelSizeSlider = document.getElementById('pixelSize');
const clearCanvasBtn = document.getElementById('clearCanvasBtn');

// Set the initial pixel size
let pixelSize = pixelSizeSlider.value;

// Function to create the grid
function createGrid() {
  canvas.innerHTML = '';  // Clear previous grid
  const gridSize = 30;  // Create 30x30 grid (you can adjust this value)
  for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = `${pixelSize}px`;

    // Add click event to each pixel
    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = colorPicker.value;
    });

    canvas.appendChild(pixel);
  }
}

// Event listener for pixel size change
pixelSizeSlider.addEventListener('input', () => {
  pixelSize = pixelSizeSlider.value;
  createGrid();
});

// Clear canvas button
clearCanvasBtn.addEventListener('click', () => {
  createGrid();
});

// Initialize the grid on load
createGrid();
