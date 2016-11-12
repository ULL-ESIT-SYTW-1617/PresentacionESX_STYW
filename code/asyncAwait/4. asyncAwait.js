const fs = require('fs-promise')

async function asyncFunc() {
  const data = await fs.readFile('README.md')
  await Promise.all([
    fs.writeFile('borrame1.md', data),
    fs.writeFile('borrame2.md', data)
  ])
  await Promise.all([
    fs.unlink('borrame1.md'),
    fs.unlink('borrame2.md')
  ])
  return 'Hecho'
}

asyncFunc().then(console.log)
