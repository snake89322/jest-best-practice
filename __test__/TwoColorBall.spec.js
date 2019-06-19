import { TwoColorBall } from '../src/twoColorBall'

describe('TwoColorBall Class', () => {
  it('random low probability repetition', () => {
    const  twoColorBall = new TwoColorBall()
    const randomTime = 100
    const randomWeightedAverageArray = []

    for (let i = 0; i < randomTime; i++) {
      const reapeatTime = TwoColorBall.randomRange(1000, 10000)
      const rollResults = []

      for (let j = 0; j < reapeatTime; j++) {
        rollResults.push(twoColorBall.roll())
      }
      const rollNoRepeatTime = [...new Set(rollResults)].length
      const repeatProbability = (reapeatTime - rollNoRepeatTime) / reapeatTime
      randomWeightedAverageArray.push(repeatProbability)
    }

    const randomWeightedAverage = randomWeightedAverageArray.reduce((a, b) => (a + b)) / randomTime

    expect(randomWeightedAverage).toBeLessThan(0.001)
  })
})
