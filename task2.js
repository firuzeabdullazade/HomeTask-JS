function service() {                                                          
    const road = prompt('Enter the distance: ') 
    for (let index = 5; index >= 5; index++) { 
      const cost = index + (road*0.25); 
      return `The cost of delivery for ${road}km is ${cost} AZN` 
    } 
  } 
   
  console.log(service()) 