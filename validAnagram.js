/*
Description:
Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 
Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

var isAnagram = function(s, t) {
   if(s.length !== t.length) return false

   let chars = {}

   for(let i = 0; i < s.length; i++) {
      chars[s[i]] = (chars[s[i]] || 0) + 1
   }

   for(let i = 0; i < t.length; i++) {
      if(!chars[t[i]]) return false
      chars[t[i]]--
   }

   return true
}

// refactor:

var isAnagram = function(s, t) {
   if(s.length !== t.length) return false

   const count = new Map()

   for(const char of s) {
      count.set(char, (count.get(char) || 0) + 1)
   }

   for(const char of t) {
      if(!count.has(char)) return false
      count.set(char, count.get(char) - 1)
      if(count.get(char) < 0) return false
   }

   return true

}


// Tests:
/* 

*/
