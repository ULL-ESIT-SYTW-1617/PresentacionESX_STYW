import { src } from 'gulp'

export async function Test () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 300)
  })
}
