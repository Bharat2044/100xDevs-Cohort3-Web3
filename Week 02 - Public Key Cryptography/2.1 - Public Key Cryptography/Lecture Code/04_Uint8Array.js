// UInt8Array - Used to handle binary data in the form of bytes (8 bits - 0 to 255)
// If we try to assign a value greater than 255, it will be automatically converted to a value between 0 and 255 by taking the remainder of the value divided by 256.


let bytes1 = new Uint8Array([0, 255, 127, 128]);
console.log(bytes1); // Output: Uint8Array [ 0, 255, 127, 128 ]


let bytes2 = new Uint8Array([0, 2523, 327, 128]); // 2523 % 256 = 219,  327 % 256 = 71
console.log(bytes2); //Output: Uint8Array(4) [ 0, 219, 71, 128 ]
