import { readFile } from '../src/readFile'
import path from 'path'

describe('readFile function', () => {
  it('works with async/await', async () => {
    expect.assertions(1)
    await expect(readFile(path.resolve(__dirname, '../src/sum.js'))).resolves.toMatch(/function\ssum\s\(x1, x2\)\s/)
  })

  it('tests error with rejects', async () => {
    expect.assertions(1)
    await expect(readFile({})).rejects.toThrow()
  })
})
