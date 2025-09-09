/*
Description:

*/

function isNonTrivialRotation(s1, s2) {
    // Write your code here
    let startingLetter = s1[0];
    let pivotIndex = s2.indexOf(startingLetter)
    if((s2.slice(pivotIndex) + s2.slice(0, pivotIndex)) !== s1 || s1 === s2) {
        return 0
    }
    
    return 1

}

// refactor:

function isNonTrivialRotation(s1, s2) {
    return s1 !== s2 && (s1 + s1).includes(s2) ? 1 : 0
}


// Tests:
/* 

*/
