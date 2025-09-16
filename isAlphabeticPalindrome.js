/*
Description:

*/

function isAlphabeticPalindrome(code) {
    // Write your code here
    code = code.toLowerCase();
    
    for(let i = 0; i < code.length; i++) {
        if (code[i].toLowerCase() !== code[i].toUpperCase()) {
            if (code[i] !== code[(code.length - 1) - i]) {
                return 0;
            }
        }
    }

    return 1;

}

// fails some test cases. 
// let code = 'A1b2B!a'
// console.log(isAlphabeticPalindrome(code))


// refactor:

function isAlphabeticPalindrome(code) {
   code = code.toLowerCase()
   let left = 0
   let right = code.length - 1

   while (left < right) {
      
      while (left < right && code[left] === code[left].toUpperCase()) { left++ }
      while (left < right && code[right] === code[right].toUpperCase()) { right-- }
      if (code[left] !== code[right]) { return 0 }

      left++
      right--
   }

   return 1
}


// Tests:
/* 

*/
