export class TwoColorBall {
  constructor (redRange, blueRange) {
    this.redRange = redRange || 33
    this.blueRange = blueRange || 16
  }

  static randomRange (down, up) {
    return down + Math.ceil(Math.random() * (up - down))
  }

  generateRedNums () {
    const arr = []
    for (let i = 0; i <= this.redRange; i++) {
      arr.push(i)
    }
    return arr
  }

  removeRedNum (arr, num) {
    const index = arr.indexOf(num)
    if (index > -1) {
      arr.splice(index, 1)
    }
    return arr
  }

  roll () {
    let redNums = this.generateRedNums()
    const rollRedNums = []
    const blueNum = TwoColorBall.randomRange(0, this.blueRange)

    for (let i = 0; i <= 6; i++) {
      const rollNum = redNums[TwoColorBall.randomRange(0, redNums.length)]
      rollRedNums.push(rollNum)
      this.removeRedNum(redNums, rollNum)
    }

    return rollRedNums.sort((a, b) => (a - b)).concat(blueNum).join('-')
  }
}
