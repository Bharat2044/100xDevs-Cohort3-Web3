// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with `00000` . How will you do it?


// Import the crypto module
const crypto = require('crypto');

// Function to find a hash with a given prefix (brute force)
function findHashWithPrefix(prefix) {
    // Initialize the input to 0
    let input = 0;

    // Loop until a hash with the given prefix is found 
    while (true) {
        // Convert the input to a string and generate the hash
        let inputStr = input.toString();

        // Generate the hash using SHA-256 algorithm and convert it to a hexadecimal string 
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

        // Check if the hash starts with the given prefix, if yes, return the input string and
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }

        // Increment the input for the next iteration
        input++;
    }
}

// Find and print the input string and hash
const prefix = '00000';

// Find the hash with the given prefix using the findHashWithPrefix function
const result = findHashWithPrefix(prefix);

// Print the result
console.log(`Input: ${result.input}`);  // Input: 596138
console.log(`Hash: ${result.hash}`);    // Hash: 00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab