/*
Description:

*/

function isNonTrivialRotation(s1, s2) {
   // Early checks
   if (s1.length !== s2.length || s1 === s2) {
      return 0
   }
   
   let startingLetter = s1[0]
   
   // Check ALL occurrences of the starting letter
   for (let i = 0; i < s2.length; i++) {
      if (s2[i] === startingLetter) {
         let rotated = s2.slice(i) + s2.slice(0, i);
         if (rotated === s1) {
               return 1
         }
      }
   }
   
   return 0

}

// refactor:
function isNonTrivialRotation(s1, s2) {
    return s1 !== s2 && (s1 + s1).includes(s2) ? 1 : 0
}



// Tests:
/* 

*/
