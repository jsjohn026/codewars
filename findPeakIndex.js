/*
Description:

*/

function findPeakIndex(counts) {
    // Write your code here
    let low = 0;
    let high = counts.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if(counts[mid] > counts[mid + 1] && counts[mid] > counts[mid - 1]) {
            return mid;
        } else if (counts[mid] < counts[mid - 1]) { high = mid - 1 }
        else { low = mid + 1 }
    }
    
}

// refactor:




// Tests:
/* 

*/
