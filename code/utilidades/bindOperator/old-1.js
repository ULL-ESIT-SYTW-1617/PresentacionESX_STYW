class Test {
  constructor () {
    this.text = 'Mi Texto'
  }

  getText () {
    return this.text
  }
}

let test = new Test()
let func = test.getText

try {
  console.log(func())
} catch(err) {
  console.log('Error!')
}


func = test.getText.bind(test)
console.log(func())
