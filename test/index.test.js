const sum = require('../src/index')

 test('should return sum of two numbers',() => {
    const numbers = [2,2]
    expect(sum(numbers)).toBe(4)
 })

  test('should return sum of two numbers when there are negative',() => {
    const numbers = [-2,-2]
    expect(sum(numbers)).toBe(-4)
 })

 
 test('should return 0 when array is empty',() => {
    const numbers = []
    expect(sum(numbers)).toBe(0)
 })

 test('should return the same number when is one number',() => {
    const numbers = [1.87]
    expect(sum(numbers)).toBe(1.87)
 })

 test('should return the same number when is one number',() => {
    const numbers = [-6,2.3,75,27,37.32,-42]
    expect(sum(numbers)).toBe(93.62)
 })