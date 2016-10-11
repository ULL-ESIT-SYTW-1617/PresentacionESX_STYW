class Test {
  constructor () {
    this.text = 'Mi Texto'
  }

  getText () {
    return this.text
  }
}

let test = new Test()
try {
  const func = test.getText
  console.log(func())
} catch(err) {
  console.log('Error!')
}


const func = test.getText.bind(test)
console.log(func())
