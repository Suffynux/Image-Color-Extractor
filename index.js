// Function to check if the user is on a mobile device
function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

// Extract Prominent Colors
const imageInput = document.getElementById("imageInput");
const showImageDiv = document.getElementById("showImageDiv");
const prominentColorsDiv = document.getElementById("prominentColors");
const resultBox = document.getElementById("resultCode");  

imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file.type.startsWith("video/")){
    alert("Invalid file type. Please upload an image.");
  }
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Create an image element
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = "Uploaded Image";
      img.classList.add('w-96', 'h-auto', 'object-contain'); // Tailwind classes for image styling

      // Clear previous image and display the new one
      showImageDiv.innerHTML = '';
      showImageDiv.appendChild(img);

      // Extract prominent colors from the image using Color.js
      colorjs.prominent(img.src, { amount: 10 }).then(colors => {
        console.log('Prominent colors from Color.js:', colors);
        prominentColorsDiv.innerHTML = ''; // Clear previous color boxes

        colors.forEach(color => {
          // Display prominent colors as color boxes
          let colorBox = document.createElement('div');
          colorBox.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
          colorBox.textContent = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
          colorBox.style.width = '100px';
          colorBox.style.height = '100px';
          colorBox.style.display = 'inline-block';
          colorBox.style.margin = '5px';
          colorBox.classList.add('text-center' , 'text-xs')
          prominentColorsDiv.appendChild(colorBox);
        });
      });
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  }
});

// Clear the image and results
document.getElementById("clearImageBtn").addEventListener("click", () => {
  showImageDiv.innerHTML = " ";
  prominentColorsDiv.innerHTML = " ";
});

