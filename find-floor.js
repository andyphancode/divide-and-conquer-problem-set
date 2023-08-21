function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if (val > arr[arr.length - 1]) {
        return arr[arr.length -1];
    } else if (val < arr[0]) {
        return -1;
    }

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        
        if (middleVal <= val && arr[middleIdx - 1] <= middleVal && arr[middleIdx + 1] > val) {
            return middleVal;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }
}

module.exports = findFloor