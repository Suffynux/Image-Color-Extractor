# Color Picker from Images

This is a simple web application that allows users to upload an image, pick a color from it using the Eyedropper API, and view the selected color's hexadecimal code.

## Features
- Upload an image through the file input
- Use the **Color.js** to pick colors from the uploaded image
- Display the selected color's hex code
- Clear the uploaded image with a button click
- Responsive layout for desktop and mobile devices

## Usage
- **Upload an image**: Click the "Upload file" input to choose an image file from your device.
- **Pick a color**: After uploading the image, click on the **Pick Color** button. You can pick a color from the image using the Eyedropper API.
- **Clear image**: Click the **Clear Image** button to remove the uploaded image from the page.
- **Mobile users**: The Eyedropper API is currently only supported on desktop browsers. If you are on a mobile device, an alert will notify you.

## Technologies Used
- **HTML5**: Markup for the webpage
- **CSS (TailwindCSS)**: For styling the application
- **JavaScript**: For interactivity (FileReader, Eyedropper API)
- **EyeDropper API**: To pick colors from the image
