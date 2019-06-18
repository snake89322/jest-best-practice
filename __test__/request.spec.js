import { request } from '../src/request'

describe('request function', () => {
  it('request normal', async () => {
    expect.assertions(1);
    await expect(request('https://api.tvmaze.com/search/shows?q=batman')).resolves
      .toEqual(
        expect.arrayContaining(
          [
            expect.objectContaining({
              score: expect.any(Number),
              show: expect.any(Object)
            })
          ]
        )
      )
  })

  it('request callback', async () => {
    const callback = jest.fn()
    await request('https://api.tvmaze.com/search/shows?q=batman', callback)

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('bad request', async () => {
    expect.assertions(1)
    await expect(request(null)).rejects.toThrow()
  })

  it('status error', async () => {
    expect.assertions(1)
    await expect(request('https://api.tvmaze.com/search/shows')).rejects.toThrow()
  })
})
