function volume_sphere() {
    // 1. Retrieve the radius value entered by the user
    const radiusInput = document.getElementById('radius').value;
    const volumeOutput = document.getElementById('volume');

    // Convert the input string to a floating-point number
    const radius = parseFloat(radiusInput);

    // 2. Validate the input: must be a non-negative number
    if (isNaN(radius) || radius < 0) {
        // Handle invalid input: display 'NaN'
        volumeOutput.value = 'NaN';
        
        // Prevent form submission if this is called via onsubmit
        return false; 
    }

    // 3. Calculate the volume of the sphere: V = (4/3) * pi * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // 4. Ensure the calculated volume is rounded to four decimal places
    const roundedVolume = volume.toFixed(4);

    // 5. Display the calculated volume in the designated output field
    volumeOutput.value = roundedVolume;
    
    // Prevent form submission if this is called via onsubmit
    return false;
}

// Ensure the HTML has input fields with IDs 'radius' and 'volume'
// and a form with ID 'MyForm'.
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;