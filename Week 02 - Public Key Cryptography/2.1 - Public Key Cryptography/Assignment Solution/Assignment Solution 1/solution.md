## Q.) What is the `11001010` converted to a `decimals` ?

**Ans.** To convert the binary number `11001010` to its decimal equivalent, follow these steps:

1. **Write down the binary number**: `11001010`
   
2. **Assign powers of 2 to each bit** (starting from the rightmost bit, which represents \(2^0\)):
   ```
   1    1    0    0    1    0    1    0
   2^7  2^6  2^5  2^4  2^3  2^2  2^1  2^0
   ```

3. **Multiply each bit by its corresponding power of 2**:
   - 1 * 2^7 = 128
   - 1 * 2^6 = 64
   - 0 * 2^5 = 0
   - 0 * 2^4 = 0
   - 1 * 2^3 = 8
   - 0 * 2^2 = 0
   - 1 * 2^1 = 2
   - 0 * 2^0 = 0

4. **Add the results together**:
   - **128 + 64 + 8 + 2 = 202**

So, the binary number `11001010` is equal to `202` in decimal.