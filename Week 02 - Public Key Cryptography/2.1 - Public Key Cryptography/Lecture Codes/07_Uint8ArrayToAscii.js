// Function to convert a Uint8Array to an ASCII string
function bytesToAscii(byteArray) {
  /* 
  // 1st way to convert an array of bytes to an ASCII string using for loop and String.fromCharCode() method
  // Initialize an empty string to store the ASCII characters
  let asciiString = "";

  // Iterate over each byte in the array
  for (let i = 0; i < byteArray.length; i++) {
    // Convert the byte to an ASCII character and append it to the string
    asciiString += String.fromCharCode(byteArray[i]);
  }

  // Return the ASCII string
  return asciiString;
  */

  /*
  // 2nd way to convert an array of bytes to an ASCII string using map() and join() methods
  // Convert each byte to its corresponding ASCII character and join them together to form a string 
  let asciiString = Array.from(byteArray).map((byte) => String.fromCharCode(byte)).join("");

  // Return the ASCII string
  return asciiString;
  */

  // 3rd way to convert an array of bytes to an ASCII string using TextDecoder class
  // Create a new TextDecoder object to decode the bytes as ASCII characters and return the resulting string
  let asciiString = new TextDecoder().decode(byteArray);

  // Return the ASCII string
  return asciiString;
}

// Example usage:
// Define a Uint8Array containing bytes representing the ASCII characters of "Hello"
const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"

// Call the function to convert the bytes to an ASCII string
const asciiString = bytesToAscii(bytes);

// Print the ASCII string to the console
console.log(asciiString); // Output: "Hello"
