function restaurantSeats() { 
    let numberOfGuests = +prompt('Enter the number of guests')
    let numberOfLarge = 0
    let numberOfMedium = 0
    let numberOfSmall = 0

    if (numberOfGuests >= 8) {
        remainder = numberOfGuests % 8
        numberOfLarge = (numberOfGuests - remainder) / 8
        numberOfGuests -= numberOfLarge * 8
    }

    if (numberOfGuests >= 4) {
        remainder = numberOfGuests % 4
        numberOfMedium = (numberOfGuests - remainder) / 4
        numberOfGuests -= numberOfMedium * 4
    }

    if (numberOfGuests >= 2) {                                         
        remainder = numberOfGuests % 2                        
        numberOfSmall = (numberOfGuests - remainder) / 2     
        numberOfGuests -= numberOfSmall * 2                               
    } 
    
    if (numberOfGuests = 1) {
        numberOfSmall += 1
    }

    let result = ''

    if (numberOfLarge > 0) {
        result += `Large tables: ${numberOfLarge} `
    }

    if (numberOfMedium > 0) {
        result += `Medium tables: ${numberOfMedium} `
    }

    if (numberOfSmall > 0) {
        result += `Small tables: ${numberOfSmall}`
    }

    return `${result}`
} 
 
console.log(restaurantSeats())