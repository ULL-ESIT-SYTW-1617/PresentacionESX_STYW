class Test {
  constructor () {
    this.text = 'Mi Texto'
  }

  getText () {
    return this.text
  }
}

let test = new Test()
const func = test::test.getText
console.log(func())
