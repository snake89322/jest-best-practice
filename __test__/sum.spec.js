import { sum } from '../src/sum'

// 1 ≤ x1 ≤ 5
// 2 ≤ x2 ≤ 10
describe('sum function', () => {
  const x1NormalValue = 3
  const x2NormalValue = 6
  it('normal value', () => {
    expect(sum(x1NormalValue, x2NormalValue)).toBe(9)
  })

  it('boundary value', () => {
    expect(sum(1, x2NormalValue)).toBe(7)
    expect(sum(5, x2NormalValue)).toBe(11)
    expect(sum(x1NormalValue, 2)).toBe(5)
    expect(sum(x1NormalValue, 10)).toBe(13)
  })
})
