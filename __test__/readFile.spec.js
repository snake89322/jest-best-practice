import { readFile } from '../src/readFile'
import path from 'path'

describe('readFile function', () => {
  it('works with async/await', async () => {
    expect.assertions(1)
    await expect(readFile(path.resolve(__dirname, './readFile.spec.js'))).resolves.toMatch(/readFile\sfunction/)
  })

  it('tests error with rejects', async () => {
    expect.assertions(1)
    await expect(readFile('')).rejects.toThrow()
  })
})
