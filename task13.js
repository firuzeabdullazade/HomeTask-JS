function bank() {
    let amountOfMoney = +prompt('Enter the amount of money')
    let hundredBanknotes = 0
    let fiftyBanknotes = 0
    let twentyBanknotes = 0
    let tenBanknotes = 0
    let fiveBanknotes = 0
    let oneBanknotes = 0

    if (amountOfMoney >= 100) {
        hundredBanknotes = Math.floor(amountOfMoney / 100)
        amountOfMoney -= hundredBanknotes*100
    }

    if (amountOfMoney >= 50) {
        fiftyBanknotes = Math.floor(amountOfMoney / 50)
        amountOfMoney -= fiftyBanknotes*50
    }

    if (amountOfMoney >= 20) {
        twentyBanknotes = Math.floor(amountOfMoney / 20)
        amountOfMoney -= twentyBanknotes*20
    }

    if (amountOfMoney >= 10) {
        tenBanknotes = Math.floor(amountOfMoney / 10)   
        amountOfMoney -= tenBanknotes*10
    }

    if (amountOfMoney >= 5) {
        fiveBanknotes = Math.floor(amountOfMoney / 5)
        amountOfMoney -= fiveBanknotes*5  

    } 
    
    if (amountOfMoney >= 1) {
        oneBanknotes = amountOfMoney /1
    }

    let result = ''

    if (hundredBanknotes > 0) {
        result += `${hundredBanknotes} x 100 AZN, ` 
    }

    if (fiftyBanknotes > 0) {
        result += `${fiftyBanknotes} x 50 AZN, `
    }

    if (twentyBanknotes > 0) {
        result += `${twentyBanknotes} x 20 AZN, `
    }

    if (tenBanknotes > 0) {
        result += `${tenBanknotes} x 10 AZN, `
    }

    if (fiveBanknotes > 0) {
        result += `${fiveBanknotes} x 5 AZN, `
    }

    if (oneBanknotes > 0) {
        result += `${oneBanknotes} x 1 AZN`
    }

    return `${result}`
}

console.log(bank())