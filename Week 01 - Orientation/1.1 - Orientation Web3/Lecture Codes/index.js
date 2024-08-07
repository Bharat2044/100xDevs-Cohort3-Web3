const crypto = require('crypto');

const input1 = "100xdevs";
const hash1 = crypto.createHash('sha256').update(input1).digest('hex');

console.log(hash1); // Output: 55711980d50fd24989409a7a7d4e15fcd206556eec1245c94a6e60910dc4e41d


const input2 = "Bharat";
const hash2 = crypto.createHash('sha256').update(input2).digest('hex');

console.log(hash2); // Output: d9192cb60ad447af5b146acc50025ceab6dc62d69c373728ba56675a787b373d
