/*
Description:
Count Elements Greater Than Previous Average
Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

Example

Input
responseTimes = [100, 200, 150,300]

Output
2

Explanation
- Day 0: 100 (no previous days, skip) 
- Day 1: 200 > average(100) = 100 → count = 1 
- Day 2: 150 vs average(100, 200) = 150 → not greater → count = 1 
- Day 3: 300 > average(100, 200, 150) = 150 → count = 2 Return 2.
Input Format

The first line contains an integer n (0 ≤ n ≤ 1000), the number of days.
If n > 0, the next n lines contains an integer representing responseTimes[i].
If n = 0, the second line is omitted or empty.
Example

4
100
200
150
300
here 4 is the length of array, followed by the elements of array on each line.

Constraints
0 <= responseTimes.length <= 1000
1 <= responseTimes[i] <= 10^9 for 0 <= i < responseTimes.length
Output Format

A single integer depicting the count of days.
Sample Input 0
0
Sample Output 0
0
Sample Input 1
1
100
Sample Output 1
0
*/

function countResponseTimeRegressions(responseTimes) {
    // Write your code here
    let count = 0;
    
    for (let i = 1; i < responseTimes.length; i++) {
        const sum = responseTimes.slice(0, i).reduce((acc, curr) => acc + curr)
        const average = sum/i
        if(responseTimes[i] > average) {
            count += 1
        }
    }
    return count
}

/*
The function countResponseTimeRegressions iterates through the responseTimes array starting from the second element. For each element at index i, it calculates the sum of all previous elements using responseTimes.slice(0, i).reduce(...), then computes the average and compares the current response time to this average.

Time complexity:
- For each iteration i (from 1 to n-1), it performs a slice operation which takes O(i) time, and a reduce operation which also takes O(i) time.
- Summing these up over all iterations results in a total time complexity of O(1 + 2 + 3 + ... + n-1) = O(n^2).

Space complexity:
- The slice operation creates a new array of size i at each iteration, which in the worst case can be up to O(n).
- The reduce operation uses O(1) additional space.
- Overall, the space complexity is dominated by the slices, resulting in O(n).

In summary:
- Time complexity: O(n^2)
- Space complexity: O(n)
*/

// refactor:

function countResponseTimeRegressions(responseTimes) {
    let count = 0;
    let sum = 0;
    
    for (let i = 1; i < responseTimes.length; i++) {
        sum += responseTimes[i - 1]
        const average = sum/i
        if(responseTimes[i] > average) {
            count++
        }
    }
    return count
}

/* 
O(n) time: Single pass through the array
O(1) space: Only using a few variables
Running sum: Instead of recalculating the sum each time, we maintain a running total
No array operations: Eliminates slice(), reduce(), and array copying
 */

