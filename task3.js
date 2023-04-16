const name = prompt('Enter the name of product: ')                              
const unitPrice = +prompt('Enter the unit price: ') 
const quantity = +prompt('Enter the quantity: ') 
const promotion = prompt('Participates in promotion (Yes/No): ') 
let discountPrice = 0 
let discountPromotion = 0 
 
function receipt() {                                                              
 
  if (quantity >= 5) { 
    discountPrice = quantity*unitPrice*0.9 
 
    if (promotion === "Yes" || promotion === "yes") { 
      discountPrice = quantity*unitPrice*0.9*0.85  
    } 
 
  } else { 
    discountPrice = quantity*unitPrice 
 
    if (promotion === "Yes" || promotion === "yes") { 
      discountPrice = quantity*unitPrice*0.85  
    } 
 
  } 
 
  console.log(`Name: ${name}`) 
  console.log(`Unit price: ${unitPrice} AZN`) 
  console.log(`Quantity: ${quantity}`) 
  console.log(`Participates in the promotion (Yes/No): ${promotion}`) 
  console.log(`----------`) 
 
  return `Price is: ${discountPrice} AZN`
} 
 
console.log(receipt())