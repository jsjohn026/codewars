/*
Description:
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

// Math: digit val * place val
// (1 or 0)         (base 2 to the place, 0 being the first place)
const binaryArrayToNumber = arr => {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num += arr[arr.length - i - 1] * Math.pow(2, i)
  }

  return num;
};

// refactor:

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

const binaryArrayToNumber = arr => {
  return arr.reduce((a,b) => a << 1 | b)
}


// Tests:
/* 
const { assert } = require('chai');

describe('Ones and Zeros', () => {
  it('Example tests', () => {
    assert.strictEqual(binaryArrayToNumber([0, 0, 0, 1]), 1, 'binaryArrayToNumber([0, 0, 0, 1])');
    assert.strictEqual(binaryArrayToNumber([0, 0, 1, 0]), 2, 'binaryArrayToNumber([0, 0, 1, 0])');
    assert.strictEqual(binaryArrayToNumber([1, 1, 1, 1]), 15, 'binaryArrayToNumber([1, 1, 1, 1])');
    assert.strictEqual(binaryArrayToNumber([0, 1, 1, 0]), 6, 'binaryArrayToNumber([0, 1, 1, 0])');
  });
});
*/