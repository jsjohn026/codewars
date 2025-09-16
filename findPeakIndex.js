/*
Description:

*/

function findPeakIndex(counts) {
    // Write your code here
    let low = 0
    let high = counts.length - 1
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        
        if(counts[mid] > counts[mid + 1] && counts[mid] > counts[mid - 1]) {
            return mid
        } else if (counts[mid] < counts[mid - 1]) { high = mid - 1 }
        else { low = mid + 1 }
    }
    
}

// refactor:

function findPeakIndex(counts) {
    let low = 0
    let high = counts.length - 1

    while(low <= high) {
        let mid = Math.floor((low + high) / 2)

        let left = mid > 0 ? counts[mid - 1] : -Infinity
        let right = mid < counts.length - 1 ? counts[mid + 1] : -Infinity

        if(counts[mid] > left && counts[mid] > right) { return mid }
        else if(counts[mid] < left) { high = mid - 1 }
        else { low = mid + 1 }
    }
}



// Tests:
/* 

*/
