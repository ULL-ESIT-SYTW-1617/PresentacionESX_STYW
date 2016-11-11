const fs = require('fs-promise')

fs.readFile('example.md').then(data => {
  let promises = [
    fs.writeFile('borrame1.md', data),
    fs.writeFile('borrame2.md', data)
  ]
  Promise.all(promises).then(() => {
    let promises = [
      fs.unlink('borrame1.md'),
      fs.unlink('borrame2.md')
    ]
    Promise.all(promises).then(() => {
      console.log('Hecho')
    })
  }).catch(err => {
    throw err
  })
}).catch(err => {
  throw err
})
