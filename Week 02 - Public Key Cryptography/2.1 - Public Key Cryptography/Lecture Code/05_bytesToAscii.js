// Reference - Read about `String.fromCharCode()` Method: https://www.w3schools.com/jsref/jsref_fromcharcode.asp

// function to convert an array of bytes to an ASCII string
function bytesToAscii(byteArray) {
  // 1st way Convert the bytes to ASCII string using map and join functions
  // return byteArray.map((byte) => String.fromCharCode(byte)).join("");

  // 2nd way to convert the bytes to ASCII string using spread operator
  // return String.fromCharCode(...byteArray);

  // 3rd way to convert the bytes to ASCII string using forEach loop
  // Initialize an empty string to store the ASCII string
  let asciiString = "";  

  // Iterate over each byte in the array
  byteArray.forEach((byte) => {
      // Convert the byte to ASCII character and append it to the ASCII string
      asciiString += String.fromCharCode(byte);
  });  

  // Return the ASCII string  
  return asciiString;
}

// Example usage:
// Define an array of bytes 
const bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"

// call the function to convert the bytes to ASCII string
const asciiString = bytesToAscii(bytes);

// Print the ASCII string to the console 
console.log(asciiString); // Output: "Hello"
