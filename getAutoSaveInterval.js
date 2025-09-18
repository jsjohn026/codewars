/*
Description:
Custom Fibonacci Sequence
Given n (0-based indexing), return the n-th Fibonacci number where F(0) = 1, F(1) = 2, and F(n) = F(n-1) + F(n-2).

Examples
Example 1
Input:
n = 3
Output:
5
Explanation:
Compute intervals step by step: 
interval[0] = 1, 
interval[1] = 2. Then 
interval[2] = 1 + 2 = 3, 
interval[3] = 2 + 3 = 5. So for n = 3, the function returns 5.
Example 2

Input:
n = 10
Output:
144
Explanation:
List the first 11 intervals: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144].
Each interval is the sum of the two previous ones. The 10th index (0-based) is 144.
Input Format
The first and only line of input contains a single integer, n.

Constraints
0 <= n <= 92
n is an integer

Output Format
Return a single integer: the computed auto-save interval in minutes for the given input n.

Sample Input 0
0
Sample Output 0
1

Sample Input 1
1
Sample Output 1
2

*/

function getAutoSaveInterval(n) {
   let intervals = [1, 2]
   if(n === 0 || n === 1) return intervals[n]

   for(let i = 2; i <= n; i++) {
      intervals.push(intervals[i - 1] + intervals[i - 2])
      console.log(intervals)
   }
   return intervals[n]
}

// refactor:




// Tests:
/* 

*/

console.log(getAutoSaveInterval(10))