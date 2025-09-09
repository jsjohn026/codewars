/*
Description:

*/

function isAlphabeticPalindrome(code) {
    // Write your code here
   let chars = code.split('')
   let lettersOnly = chars.filter(char => char.toUpperCase() !== char.toLowerCase())
    
   let reversedChars = ''
   for(let i = lettersOnly.length - 1; i >= 0; i--) {
       reversedChars += lettersOnly[i]
   }
   
   if (lettersOnly.join('').toLowerCase() === reversedChars.toLowerCase()   ) {
      return 1      
   }

   return 0

}

// let code = 'A1b2B!a'
// console.log(isAlphabeticPalindrome(code))


// refactor:

function isAlphabeticPalindrome(code) {
   let leftIndex = 0
   let rightIndex = code.length - 1

   while (leftIndex < rightIndex) {
      
      while (leftIndex < rightIndex && code[leftIndex].toLowerCase() === code[leftIndex].toUpperCase() ) {
         leftIndex++
      }

      while (leftIndex < rightIndex && code[rightIndex].toLowerCase() === code[rightIndex].toUpperCase()) {
         rightIndex--
      }

      if (code[leftIndex].toLowerCase() !== code[rightIndex].toLowerCase()) {
         return 0
      }

      leftIndex++
      rightIndex--
   }

   return 1

}



// Tests:
/* 

*/
