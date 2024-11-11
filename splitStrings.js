/*
Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
   let pairs = []
   for(let i = 0; i < str.length; i++){
    if(i % 2 !== 0) {
      pairs.push(str.slice(i - 1, i + 1))
    }
  }

  if (str.length % 2 !== 0) {
    pairs.push(str[str.length - 1] + '_')
  }
  
  return pairs; 
}

// refactor:

function solution(str){
  let pairs = []
  if (str.length % 2 !== 0) {
    pairs.push(str[str.length - 1] + '_')
  }

  for(let i = 0; i < str.length; i += 2 ){
   if(i % 2 === 0) {
     pairs.push(str[i] + str[i + 1])
   }

 }
 
 return pairs; 
}


// Tests:
/* 
const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});
*/
