const fs = require('fs-promise')
const gensync = require('../other/generatorsUtils')

const asyncFunc = gensync(function* () {
  const data = yield fs.readFile('README.md')
  yield Promise.all([
    fs.writeFile('borrame1.md', data),
    fs.writeFile('borrame2.md', data)
  ])
  yield Promise.all([
    fs.unlink('borrame1.md'),
    fs.unlink('borrame2.md')
  ])
  yield 'Hecho'
});

asyncFunc()
.then(console.log)
