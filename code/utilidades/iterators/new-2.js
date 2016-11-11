class Join {
  constructor(arr1, arr2) {
    this.arr1 = arr1
    this.arr2 = arr2
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.arr1.length && i < this.arr2.length; i++) {
      yield this.arr1[i]
      yield this.arr2[i]
    }
  }
}

let join = new Join([1, 2, 3], ['uno', 'dos', 'tres'])

for (let element of join) {
  console.log(element)
}
