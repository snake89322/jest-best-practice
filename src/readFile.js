import fs from 'fs'

export function readFile (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (error, data) => {
      if (error) reject(error)

      resolve(data)
    })
  })
}
