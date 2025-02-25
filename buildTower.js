/*
Description:
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) { //2
   // build here
  if (n === 1) {
  return towerBuilder(nFloors - 1)
  }

  let tower = towerBuilder(nFloors - 1) // length of 4
  let numOfBlocks = (nFloors * 2) - 1 // 3
  let floor = ""

  let blocks = "" // 
  let spaces = "" // "   "
  for (let i = 0; i < numOfBlocks; i++) { //
    if (i < tower.length) {
      spaces += " "
    } else {
      blocks += "*"
    }      
  }

  if (blocks.length % 2 === 0) {
    blocks += "*"
  }

  floor = spaces + blocks + spaces
  tower.unshift(floor)    

  return tower
}

// GAVE UP

// refactor:
function towerBuilder(nFloors) {
  let tower = []
  for (let i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)) + 
              "*".repeat((i * 2) + 1) +
              " ".repeat(nFloors - i - 1)
  }
  return tower  
}

// Tests:
/* 
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
});

*/
