function findRotationCount(arr) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if (arr[arr.length-1] > arr[0]) {
        return 0;
    }
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        console.log(leftIdx, rightIdx, middleIdx, middleVal)
        if (middleVal < arr[middleIdx - 1]) {
            return middleIdx;
        } else if (middleVal > arr[middleIdx - 1] && arr[middleIdx-1] < arr[arr.length-1]) {
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }

    return 0;
}

module.exports = findRotationCount

// basically index of lowest number 
// can also find highest number and logic from there
// constants =
// the lowest number wil lalways be preceded by a higher number
// the highest number will always be followed by a lower number 
// if arr[arr.length-1] > arr[0], there were no rotations
// arr leftidx will always be higher than arr rightidx at the beginning