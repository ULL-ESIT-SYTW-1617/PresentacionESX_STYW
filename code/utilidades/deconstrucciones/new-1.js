function login (username, password) {
  // Hacer cosas
  console.log(username)
  console.log(password)
}


let argv = {
  username: 'Pepe',
  password: 'Patata'
  // Y otras cosas
}

let { username, password } = argv

login(username, password)
