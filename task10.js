function bankDeposit() {

    const initialAmount = +prompt('Enter the initial amount')
    const durationYear = +prompt('Enter the duration years')
    const percentForYear = +prompt('Enter the % per year')
    
    for (let i = 1; i <= durationYear; i++) {
     const amount = initialAmount*(1+(percentForYear/100))**i;
     return `${amount}`
    }
} 

bankDeposit()
