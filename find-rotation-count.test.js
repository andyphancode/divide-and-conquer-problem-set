const findRotationCount = require("./find-rotation-count")

describe("#findRotationCount", function () {
  it("returns the number of rotations", function () {
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2)
    expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
    expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)
    expect(findRotationCount([15, 18, 2, 3, 6, 12, 13, 14])).toBe(2)
    expect(findRotationCount([9,1,2,3,4,5,6,7,8])).toBe(1)
    expect(findRotationCount([2,3,4,5,6,7,8,9,1])).toBe(8)
    expect(findRotationCount([1])).toBe(0)
  })
})