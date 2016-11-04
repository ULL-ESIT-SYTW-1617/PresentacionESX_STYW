import { exec } from 'child-process-promise'

export async function Test () {
  return new Promise((resolve, reject) => {
    let stdout
    stdout = await exec('ls')
    console.log(stdout)
  })
}
