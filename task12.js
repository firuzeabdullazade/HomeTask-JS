function foodDelivery() { 
    let individualCode = +prompt('Enter your individual code') 
    let sum = 0; 
    while (individualCode > 0) { 
        remainder = individualCode % 10 
        sum += remainder; 
        individualCode = (individualCode - remainder) / 10; 
    } 
    return sum; 
} 
console.log(foodDelivery())