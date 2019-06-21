import { Triangle } from '../src/Triangle'

function getTriangleType () {
  return new Triangle(...arguments).type
}

describe('Triangle class effective equivalence class', () => {
  it('case 1', () => {
    expect(getTriangleType(3, 4, 5)).toEqual('R2')
  })

  it('case 2', () => {
    expect(getTriangleType(4, 4, 5)).toEqual('R3')
  })

  it('case 3', () => {
    expect(getTriangleType(4, 5, 4)).toEqual('R3')
  })

  it('case 4', () => {
    expect(getTriangleType(5, 4, 4)).toEqual('R3')
  })

  it('case 5', () => {
    expect(getTriangleType(3, 3, 3)).toEqual('R4')
  })
})

describe('Triangle class invalid equivalence class', () => {
  it('case 6', () => {
    expect(getTriangleType(3.5, 4, 5)).toEqual('Error')
  })

  it('case 7', () => {
    expect(getTriangleType(4, 3.5, 5)).toEqual('Error')
  })

  it('case 8', () => {
    expect(getTriangleType(4, 5, 3.5)).toEqual('Error')
  })

  it('case 9', () => {
    expect(getTriangleType(3.5, 4.5, 5)).toEqual('Error')
  })

  it('case 10', () => {
    expect(getTriangleType(3.5, 4, 5.5)).toEqual('Error')
  })

  it('case 11', () => {
    expect(getTriangleType(3, 4.5, 5.5)).toEqual('Error')
  })

  it('case 12', () => {
    expect(getTriangleType(3.5, 4.5, 5.5)).toEqual('Error')
  })

  it('case 13', () => {
    expect(getTriangleType(3, null, null)).toEqual('Error')
  })

  it('case 14', () => {
    expect(getTriangleType(null, 4, null)).toEqual('Error')
  })

  it('case 15', () => {
    expect(getTriangleType(null, null, 5)).toEqual('Error')
  })

  it('case 16', () => {
    expect(getTriangleType(3, 4, null)).toEqual('Error')
  })

  it('case 17', () => {
    expect(getTriangleType(3, null, 5)).toEqual('Error')
  })

  it('case 18', () => {
    expect(getTriangleType(null, 4, 5)).toEqual('Error')
  })

  it('case 19', () => {
    expect(getTriangleType(3, 4, 5, 6)).toEqual('Error')
  })

  it('case 20', () => {
    expect(getTriangleType(3, 4, 5, 6)).toEqual('Error')
  })

  it('case 21', () => {
    expect(getTriangleType(3, -1, 5)).toEqual('Error')
  })

  it('case 22', () => {
    expect(getTriangleType(3, 4, 0)).toEqual('Error')
  })

  it('case 23', () => {
    expect(getTriangleType(0, -1, 5)).toEqual('Error')
  })

  it('case 24', () => {
    expect(getTriangleType(0, 4, -1)).toEqual('Error')
  })

  it('case 25', () => {
    expect(getTriangleType(3, 0, -1)).toEqual('Error')
  })

  it('case 26', () => {
    expect(getTriangleType(-1, 0, -1)).toEqual('Error')
  })

  it('case 27', () => {
    expect(getTriangleType(1, 2, 4)).toEqual('R1')
  })

  it('case 28', () => {
    expect(getTriangleType(1, 3, 2)).toEqual('R1')
  })

  it('case 29', () => {
    expect(getTriangleType(4, 1, 2)).toEqual('R1')
  })

  it('case 30', () => {
    expect(getTriangleType(0, 4, 5)).toEqual('Error')
  })

  it('case 31', () => {
    expect(getTriangleType(3, 4, 5)).not.toEqual('R3')
  })

  it('case 32', () => {
    expect(getTriangleType(1, 2, 3)).toEqual('R1')
  })

  it('case 33', () => {
    expect(getTriangleType(3, 4, 5)).not.toEqual('R4')
  })

  it('case 34', () => {
    expect(getTriangleType(3, 3, 4)).not.toEqual('R4')
  })

  it('case 35', () => {
    expect(getTriangleType(-1, 2, 4)).toEqual('Error')
  })
})


