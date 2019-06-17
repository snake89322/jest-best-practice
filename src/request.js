import fetch from 'node-fetch'

export function request (url, callback) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(function (response) {
        if (response && response.status === 200) {
          callback && callback()
          resolve(response.json())
        } else {
          reject(new Error('request error'))
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
