import { exec } from 'child-process-promise'

export default async function dir () {
  console.log((await exec('dir')).stdout)
}
