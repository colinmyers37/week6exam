const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray([1,2,3]))).toBe(true)
    })

test("is the same length", () => {
    expect(shuffleArray([1,2,3]).length).toEqual(3)
})

})