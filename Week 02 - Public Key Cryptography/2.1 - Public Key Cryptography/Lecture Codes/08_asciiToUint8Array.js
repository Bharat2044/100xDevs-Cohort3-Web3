// Function to convert an ASCII string to a Uint8Array 
function asciiToBytes(asciiString) {
    /*
    // 1st way to convert an ASCII string to an array of bytes using for loop and charCodeAt() method
    // Initialize an empty uint8 array with the same length as the ASCII string to store the bytes 
    let byteArray = new Uint8Array(asciiString.length);

    // Iterate over each character in the string
    for (let i = 0; i < asciiString.length; i++) {
        // Convert the character to its ASCII code and append it to the array
        byteArray[i] = asciiString.charCodeAt(i);
    }

    // Return the array of bytes
    return byteArray;
    */

    // 2nd way to convert an ASCII string to an array of bytes using map() method and charCodeAt() method
    // Convert each character in the ASCII string to its ASCII code and store it in a Uint8Array using the map() method
    let byteArray = new Uint8Array([...asciiString].map((char) => char.charCodeAt(0)));

    // Return the array of bytes
    return byteArray;
}

// Example usage:
// declare a string "Hello"
const ascii = "Hello";

// Call the function to convert the ASCII string to a Uint8Array
const byteArray = asciiToBytes(ascii);

// Print the array of bytes
console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
