var coches = [
  {
    marca: 'Volkswagen',
    modelo: 'Golf'
  },
  {
    marca: 'Volkswagen',
    modelo: 'Tiguan'
  },
  {
    marca: 'Volkswagen',
    modelo: 'Polo'
  },
  {
    marca: 'Seat',
    modelo: 'Ibiza'
  },
  {
    marca: 'Seat',
    modelo: 'Toledo'
  },
  {
    marca: 'Seat',
    modelo: 'Cordoba'
  },
  {
    marca: 'Renault',
    modelo: 'Clio'
  },
  {
    marca: 'Renault',
    modelo: 'Megane'
  },
  {
    marca: 'Renault',
    modelo: 'Talisman'
  }
]

var cochesSeat = coches.filter(function (c) { return c.marca === 'Seat' })
console.log(cochesSeat)
