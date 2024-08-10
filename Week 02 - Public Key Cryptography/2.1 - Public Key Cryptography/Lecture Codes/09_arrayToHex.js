/**
 * Hex
 * 1 character = 4 bits
 * A single hex character can be any of the `16` possible values: `0-9` and `A-F`.
 */

// Function to convert a Uint8Array to a hex string
function arrayToHex(byteArray) {
  /*
  // 1st way to convert a Uint8Array to a hex string using for loop and toString() method
  // Initialize an empty string to store the hex values
  let hexString = "";

  // Iterate over each byte in the array
  for (let i = 0; i < byteArray.length; i++) {
    hexString += byteArray[i].toString(16).padStart(2, "0");
  }

  // Return the hex string
  return hexString;
  */

  // 2nd way to convert a Uint8Array to a hex string using map() method and join() method
  // Convert each byte in the Uint8Array to a hex string and join them together
  let hexString = [...byteArray]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  // Return the hex string
  return hexString;

  /*
  // 3rd way to convert a Uint8Array to a hex string using Buffer.from() and toString() method
  // Convert the Uint8Array to a buffer and then to a hex string using the toString() method
  let hexString = Buffer.from(byteArray).toString("hex");

  // Return the hex string
  return hexString;
  */
}

// Example usage:
// uint8 array representing the ASCII string "Hello" (72, 101, 108, 108, 111)
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"

// Call the function to convert the Uint8Array to a hex string
const hexString = arrayToHex(byteArray);

// Print the hex string
console.log(hexString); // Output: "48656c6c6f"
