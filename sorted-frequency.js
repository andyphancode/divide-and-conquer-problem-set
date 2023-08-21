function sortedFrequency(arr, val) {
    
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let left = 0;
    let right = 0;
    let invalid = 0;

    if (val < arr[0] || val > arr[arr.length-1]) {
        return -1;
    }

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        if (val === arr[leftIdx]) {
            left = leftIdx;
            break;
        } else if (val < middleVal) {
            rightIdx = middleIdx - 1;
        } else if (val > middleVal) {
            leftIdx = middleIdx + 1;
        } else if (middleVal === val && arr[middleIdx - 1] != val) {
            left = middleIdx;
            break;
        } else if (val === middleVal) {
            rightIdx = middleIdx - 1;
        } 
    }

    if (leftIdx >= rightIdx) {
        invalid++;
    }

    leftIdx = 0;
    rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        middleVal = arr[middleIdx];
        
        if (val === arr[rightIdx]) {
            right = rightIdx;
            break;
        } else if (val > middleVal) {
            leftIdx = middleIdx + 1;
        } else if (val < middleVal) {
            rightIdx = middleIdx - 1;
        } else if (middleVal === val && arr[middleIdx + 1] != val) {
            right = middleIdx;
            break;
        } else if (val === middleVal) {
            leftIdx = middleIdx + 1;
        } 
    }

    if (leftIdx >= rightIdx) {
        invalid++;
    }

    if (invalid === 2) {
        return -1;
    }

    return right - left + 1;
    
}


module.exports = sortedFrequency