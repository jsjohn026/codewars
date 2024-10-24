// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0


// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

//str -> jewels list str -> list stones (I have)
//how many of my stones are actully jewels -> rock, emerald, rock, rock, emerald

function findJewels(jewels, stones){
  const map = {}
  let count = 0
  //confirm all the jewels - loop
  for(const jewel of jewels){
    map[jewel] = true
  }
  //compare all of my stones to see if jewels
  for(const stone of stones){
    if( map[stone] ){
      count++
    }
  }
  return count
}

console.log( findJewels('aA', 'aAAbbbb'), '3' )


// Tests:
/* 
https://leetcode.com/problems/jewels-and-stones/description/
*/
