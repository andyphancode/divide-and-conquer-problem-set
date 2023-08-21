function findRotatedIndex(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;


    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
            
        if (val === middleVal) {
            return middleIdx;
        } else if (val === arr[rightIdx]) {
            return rightIdx;
        } else if (val === arr[leftIdx]) {
            return leftIdx;
        } else if ((val > middleVal && val < arr[rightIdx]) || (val < middleVal && val < arr[rightIdx])) {
            leftIdx = middleIdx + 1;
        } else if ((val > middleVal && val > arr[leftIdx]) || (val < middleVal && val > arr[leftIdx])) {
            rightIdx = middleIdx - 1;
        } 
    }

    return -1;
}

module.exports = findRotatedIndex



