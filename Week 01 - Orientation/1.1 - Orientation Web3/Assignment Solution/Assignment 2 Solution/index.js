// What if I ask you that the `input string` should start with `100xdevs` ? How would the code change?


// Import the crypto module
const crypto = require('crypto');

// Function to find a hash with a given prefix (brute force)
function findHashWithPrefix(prefix) {
    // Initialize the input to 0
    let input = 0;

    // Loop until a hash with the given prefix is found 
    while (true) {
        // Convert the input to a string
        let inputStr = "100xdevs" + input.toString();

        //  Generate the hash using SHA-256 algorithm and convert it to a hexadecimal string
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
console.log(`Input: ${result.input}`);  // Input: 100xdevs2274885
console.log(`Hash: ${result.hash}`);    // Hash: 00000b2d1dde70b56f41571855e268d140b304c7661c0ef04a8889bd83a88b06