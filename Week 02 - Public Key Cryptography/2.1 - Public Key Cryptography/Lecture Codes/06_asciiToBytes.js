// Reference - Read about `charCodeAt()` Method: https://www.w3schools.com/JsrEF/jsref_charcodeat.asp

// function to convert an ASCII string to an array of bytes
function asciiToBytes(asciiString) {
  /*
  // 1st way to convert ASCII string to an array of bytes using map() method and charCodeAt() method
  // Split the ASCII string into an array of characters, then map each character to its ASCII code
  let byteArray = asciiString.split("").map((char) => char.charCodeAt(0));

  // Return the array of bytes
  return byteArray;
  */

  // 2nd way to convert ASCII string to an array of bytes using for loop and charCodeAt() method
  // Initialize an empty array to store the bytes
  const byteArray = [];

  // Iterate over each character in the ASCII string
  for (let i = 0; i < asciiString.length; i++) {
    byteArray.push(asciiString.charCodeAt(i));
  }

  // Return the array of bytes
  return byteArray;
}

// Example usage:
// Define an ASCII string
const ascii = "Hello";

// Call the function to convert the ASCII string to an array of bytes
const byteArray = asciiToBytes(ascii);

// Print the array of bytes to the console
console.log(byteArray); // Output: [72, 101, 108, 108, 111]
