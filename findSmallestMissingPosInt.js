/*
Description:

*/

function findSmallestMissingPositive(orderNumbers) {
    // Write your code here
    let max = orderNumbers.length
    //swap numbers until they are in the correct spot
    for(let i = 0; i < max; i++) {
        
        //stay in that spot until the correct number is in there
        while (orderNumbers[i] > 0 && 
            orderNumbers[i] <= max && 
            orderNumbers[i]!== orderNumbers[orderNumbers[i] - 1]) {
                
            let correctIndex = orderNumbers[i] - 1;
            [orderNumbers[i], orderNumbers[correctIndex]] = [orderNumbers[correctIndex], orderNumbers[i]]
        }
    }
    
    //Find which number is missing
    for(let i = 0; i < max; i++) {
        let missingNum = i + 1
        if(orderNumbers[i] !== missingNum) {
            return missingNum
        }
    }
    return max + 1
}

// refactor:




// Tests:
/* 

*/
