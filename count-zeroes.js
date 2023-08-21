function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  if (arr[rightIdx] === 1) {
    return 0;
  }

  if (arr[leftIdx] === 0) {
    return arr.length;
  }

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal === 1 && arr[middleIdx+1] === 0) {
        return arr.length - (middleIdx+1);
    } else if (middleVal === 1) {
        leftIdx = middleIdx + 1;
    } else if (middleVal === 0) {
        rightIdx = middleIdx - 1;
    }
  }
}

module.exports = countZeroes