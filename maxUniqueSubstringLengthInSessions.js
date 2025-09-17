/*
Description:
Max Unique Substring Length in a Session
Given a string of lowercase letters with sessions separated by '' characters, find the maximum length of a substring with all distinct letters within any single session.

Example
Input
sessionString = abcabcbb

Output
3

Explanation
- There is only one session: "abcabcbb". 
- Scanning with a sliding window for distinct letters, the longest substrings without repeats are "abc", "bca" and so on, each of length 3. 
- Therefore, the result is 3.

Input Format
A single line containing the string sessionString.

Constraints
0 <= S.length <= 100000
For all i in [0, S.length]: S[i] is either '*' or a lowercase letter 'a' to 'z'
Each session is defined as a maximal contiguous substring of S without '*' characters
Number of sessions (segments between '*') is at most S.length + 1

Output Format
A single integer denoting the maximum length among all substrings. If sessionString is empty or contains only '*', output 0.

Sample Input 0
*
Sample Output 0
0

Sample Input 1
aa
Sample Output 1
1
*/

function maxDistinctSubstringLengthInSessions(sessionString) {
    // Write your code here
    if (!sessionString || sessionString === '*') return 0
    
    let sessions = sessionString.split('*')
    let maxLength = 0
    
    for(let session of sessions) {         // Look at each session string
      let seen = new Set()                 // Make a new set for each session
      let left = 0                         // Open a sliding window with a left pointer
      
      for(let right = 0; right < session.length; right++) {  // Set the right side of the sliding window
         while(seen.has(session[right])) {                   // If this char has already been seen delete it from the set
            seen.delete(session[left])                       // move the left pointer forward  and repeat this check until the char is not found in the set
            left++                                           // https://www.youtube.com/watch?v=wiGpQwVHdE0
         }
         seen.add(session[right])
         maxLength = Math.max(maxLength, right - left + 1)
      }
    }
    return maxLength
}

// refactor:




// Tests:
/* 
'abcabcbb*defdefab*huggiehug'

*/
