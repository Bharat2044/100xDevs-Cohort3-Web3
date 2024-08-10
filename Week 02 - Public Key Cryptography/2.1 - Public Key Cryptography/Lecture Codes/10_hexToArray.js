/**
 * Hex
 * 1 character = 4 bits
 * A single hex character can be any of the `16` possible values: `0-9` and `A-F`.
 */

// Function to convert a hex string to a Uint8Array
function hexToArray(hexString) {
  /*
  // 1st way to convert a hex string to a Uint8Array using for loop and parseInt() method
  // Initialize an empty Uint8Array with half the length of the hex string to store the bytes
  const byteArray = new Uint8Array(hexString.length / 2);

  // Iterate over each pair of characters in the hex string
  for (let i = 0; i < byteArray.length; i++) {
    // Convert the pair of characters to a byte and append it to the array
    byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
  }

  // Return the array of bytes
  return byteArray;
  */

  // 2nd way to convert a hex string to a Uint8Array using Buffer.from() method
  // Convert the hex string to a buffer and then to a Uint8Array using Buffer.from()
  let byteArray = new Uint8Array(Buffer.from(hexString, "hex"));

  // Return the array of bytes
  return byteArray;
}

// Example usage:
// Hex string "48656c6c6f" is equivalent to ASCII string "Hello"
const hex = "48656c6c6f";

// Call the function to convert the hex string to a Uint8Array
const byteArrayFromHex = hexToArray(hex);

// Print the array of bytes
console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
