let generatePasswordButton = document.getElementById('generate')

let upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let specArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ' ', '-', '.', '/', ':', ';', '<=>', '?', '@', '[', '~']
let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function generatePwChoices() {

  let pwLength = parseInt(prompt('How many characters would you like your password to contain?(Between 8-128 characters)'))

  // if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
  //   alert('Invalid Input! Enter a number between 8-128')
  //   return
  // }

  // similar to the commented out code above excpet it returns invalid inputs for length and if anything other than a number is entered
  if (pwLength < 8) {
    alert('The password must be at least 8 characters!')
    return
  }
  if (pwLength > 128) {
    alert('The password must be less than 128 characters!')
    return
  }
  if (isNaN(pwLength)) {
    alert('You must enter a number!')
    return
  }


  let upCase = confirm('Do you want to include upper case characters?')
  let lwCase = confirm('Do you want to include lower case characters?')
  let nums = confirm('Do you want to include numbers?')
  let specialChar = confirm('Do you want to include special characters?')


  if (lwCase === false && upCase === false && nums === false && specialChar === false) {
    alert('Your password must contain at least one uppercase, lowercase, number, or special character')
    return
  }

  let answers = {
    length: pwLength,
    specialCharacters: specialChar,
    numbers: nums,
    lowerCase: lwCase,
    upperCase: upCase
  }

  return answers

}

function generatePassword() {
  let options = generatePwChoices()
  console.log(options)

  let passChoices = []
  console.log(passChoices)

  if (options.specialCharacters) {
    for (i = 0; i < specArray.length; i++) {
      passChoices.push(specArray[i])
    }
  }
  if (options.numbers) {
    for (i = 0; i < numArray.length; i++) {
      passChoices.push(numArray[i])
    }
  }
  if (options.lowerCase) {
    for (i = 0; i < lowerArray.length; i++) {
      passChoices.push(lowerArray[i])
    }
  }
  if (options.upperCase) {
    for (i = 0; i < upperArray.length; i++) {
      passChoices.push(upperArray[i])
    }
  }

  let generatedPw = []

  for (let i = 0; i < options.length; i++) {
    let random = Math.floor(Math.random() * Math.floor(passChoices.length))
    generatedPw.push(passChoices[random])
  }

  console.log(generatedPw)

  let boomDone = generatedPw.join('')
  console.log(boomDone)

  document.getElementById('password').textContent = boomDone
}

let password = ''

generatePasswordButton.addEventListener('click', generatePassword)