function temperature() {
    const firstTemperature = +prompt('Enter average annual temperature of first country: ')
    const secondTemperature = +prompt('Enter average annual temperature of second country: ')
    const thirdTemperature = +prompt('Enter average annual temperature of third country: ')

    if (thirdTemperature > secondTemperature) {

        if (secondTemperature > firstTemperature) {

            console.log(`${thirdTemperature}, ${secondTemperature}, ${firstTemperature}`)
        } else {
             
            if (thirdTemperature > firstTemperature) {
                console.log(`${thirdTemperature}, ${firstTemperature}, ${secondTemperature}`)

            } else { 
                console.log(`${firstTemperature}, ${thirdTemperature}, ${secondTemperature}`)
            } 
            
        } 

    } else {

        if (thirdTemperature > firstTemperature) {

            console.log(`${secondTemperature}, ${thirdTemperature}, ${firstTemperature}`)
        } else {

            if (firstTemperature > secondTemperature) {

                console.log(`${firstTemperature}, ${secondTemperature}, ${thirdTemperature}`)

            } else {
                console.log(`${secondTemperature}, ${firstTemperature}, ${thirdTemperature}`)
            }
        }
    }
}

temperature()