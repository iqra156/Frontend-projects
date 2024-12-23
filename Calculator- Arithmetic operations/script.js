// Initialize the display with '0.'
window.onload = function() {
    document.getElementById('display').value = '0.';
};

// Function to append character to the display
function appendCharacter(character) {
    let display = document.getElementById('display');
    
    // Handle if the user inputs a decimal
    if (character === '.') {
        // Prevent multiple decimal points in the same number
        if (display.value.includes('.')) {
            return; // Do nothing if there's already a decimal point
        } else if (display.value === '0') {
            display.value = '0.'; // Ensure 0. is displayed if the user presses '.' first
        } else {
            display.value += '.'; // Append decimal point if it's valid
        }
    } else if (display.value === '0.') {
        // If the display has '0.', replace it with the character (except for the decimal point case)
        display.value = character;
    } else {
        // For normal input, just append the character
        display.value += character;
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '0.'; // Reset to '0.' on clear
}

// Function to delete the last character in the display
function deleteLast() {
    let display = document.getElementById('display');
    
    // If there is only one character left, reset to '0.'
    if (display.value.length === 1) {
        display.value = '0.';
    } else {
        display.value = display.value.slice(0, -1); // Remove the last character
    }
}

// Function to calculate the result
function calculateResult() {
    let display = document.getElementById('display');
    try {
        // Evaluate the expression
        let result = eval(display.value);
        
        // Display the result and ensure that it's not just '0' but '0.' for decimal display
        display.value = result === 0 ? '0.' : result;
    } catch (error) {
        display.value = 'Error'; // Display error if the eval() fails
    }
}
