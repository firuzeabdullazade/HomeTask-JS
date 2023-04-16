function register() {                                                         
    const lastName = prompt('Enter your last name: ') 
    const firstName = prompt('Enter your first name: ') 
    const email = prompt('Enter your email address: ') 
   
    return `*${email}* - *${lastName}* *${firstName}*` 
  } 
   
  console.log(register()) 