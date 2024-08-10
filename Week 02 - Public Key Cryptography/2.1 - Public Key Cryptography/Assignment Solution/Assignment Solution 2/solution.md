## Q.) What do you think happens to the first element here? Does it throw an error?

```js
let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;
```

**Ans.** The first element of the `Uint8Array` in this code snippet remains unaffected. The code will not throw an error.

**Here's what happens step by step:**

### Code Explanation:

```js
let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;
```

1. **Initial Array**: You create a `Uint8Array` with the elements `[0, 255, 127, 128]`.
   - `uint8Arr[0]` is `0`
   - `uint8Arr[1]` is `255`
   - `uint8Arr[2]` is `127`
   - `uint8Arr[3]` is `128`

2. **Assignment**: You assign `300` to the second element (`uint8Arr[1]`).

### What Happens During Assignment?
- A `Uint8Array` can only store values between `0` and `255`.
- When you assign a value greater than `255`, JavaScript converts the value using the modulo operation with `256` (i.e., `value % 256`).

For `300`:
- `300 % 256 = 44`

So, `uint8Arr[1]` becomes `44`.

### Final State of the Array
The array will look like this:

```js
console.log(uint8Arr); // Output: Uint8Array(4) [ 0, 44, 127, 128 ]
```

### Conclusion
- **First Element (`uint8Arr[0]`)**: Remains `0`, unchanged.
- **Second Element (`uint8Arr[1]`)**: Changes to `44`.
- **Error**: No error is thrown. The assignment is handled by converting the value to fit within the `Uint8Array` range.