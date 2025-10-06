/*
Description:
Valid Palindrome
Solved 
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true
Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false
Explanation: "tabacat" is not a palindrome.

Constraints:

1 <= s.length <= 1000
s is made up of only printable ASCII characters.

*/

function isAlphaNum(c) {
    return (
        (c >= 'A' && c <= 'Z') ||
        (c >= 'a' && c <= 'z') ||
        (c >= '0' && c <= '9')
    )
}

function isPalindrome(s) {
    s = s.toLowerCase().split(' ').join('');
    let l = 0;
    let r = s.length - 1;

    while(l < r) {
        while( l < r && !this.isAlphaNum(s[l])) { l++ }
        while( l < r && !this.isAlphaNum(s[r])) { r-- }

        if(s[l] !== s[r]) { return false }

        l++;
        r--;
    }
    return true;
}

// refactor:

// Tests:
/* 

*/
