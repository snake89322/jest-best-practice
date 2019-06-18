import { date } from '../src/date'

describe('date function', () => {
  it('normal date', async () => {
    expect(date('2019-02-28')).toEqual('{2019} 02-28T00:00:00 000 Z AM')
  })

  it('leap year date', async () => {
    expect(date('2020-02-29')).toEqual('{2020} 02-29T00:00:00 000 Z AM')
  })

  it('wrong date', async () => {
    expect(date('2020-06-31')).toEqual('{2020} 07-01T00:00:00 000 Z AM')
  })
})
