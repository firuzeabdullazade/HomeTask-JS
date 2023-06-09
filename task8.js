function convertNumberToText(number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  
    if (number < 10 || number > 99 || isNaN(number)) {
      return 'Invalid input. Please enter a number between 10 and 99.'
    }
  
    if (number >= 11 && number <= 19) {
      return teens[num - 11]
    }
  
    const onesDigit = number % 10
    const tensDigit = (number - onesDigit)/10
  
    if (onesDigit === 0) {
      return tens[tensDigit]
    }
  
    return tens[tensDigit] + '' + ones[onesDigit]
  }
  
  console.log(convertNumberToText(10))