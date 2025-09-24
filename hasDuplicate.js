/*
Description:
Contains Duplicate
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:
Input: nums = [1, 2, 3, 3]

Output: true

Example 2:
Input: nums = [1, 2, 3, 4]

Output: false

*/

function hasDuplicate(nums) {
    let values = {}

    for (let i = 0; i < nums.length; i++) {
        console.log('~~~~~~~~~~~~~')
        console.log('start: ', values)
        if(values[nums[i]]) return true;
        
        values[nums[i]] = 1;
        console.log('end: ', values)
        console.log('~~~~~~~~~~~~~')
    }

    return false;
}

// refactor:


console.log(hasDuplicate([1, 2, 3, 3]));


// Tests:
/* 

*/
