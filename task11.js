function coffeeHouse() {

  const numberOfOrders = +prompt('Enter the number of your orders:')

  if (numberOfOrders === 1 || numberOfOrders === 2) {
    return 1
  } else {
    let firstPoint = 1
    let secondPoint = 1
    let lastPoint = 0
    for (let i = 3; i <= numberOfOrders; i++) {
      lastPoint = firstPoint + secondPoint
      secondPoint = firstPoint
      firstPoint = lastPoint
    }
    return lastPoint
  }
}
console.log(coffeeHouse())