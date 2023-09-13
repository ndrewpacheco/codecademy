
// Coding question
// A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. 
// For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

// Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

// encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
// decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
// In both methods, any character outside the alphabet should remain the same.
// But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.
// Example:
const alphabet = ('abcdefghijklmnopqrstuvwxyz' + 'abcdefghijklmnopqrstuvwxyz')

class ShiftCipher {
  constructor(num) {
    this.num = num;
  }

  encrypt(str) {
    return str.split('').map(char => {
      if (alphabet.includes(char.toLowerCase())) {
        return alphabet[alphabet.indexOf(char.toLowerCase()) + this.num].toUpperCase()
      } else {
        return char
      }
    }).join('')
  }

  decrypt(str) {
    return str.split('').map(char => {
      if (alphabet.includes(char.toLowerCase())) {
        const reversedAlpha = alphabet.split('').reverse().join('')
        return reversedAlpha[reversedAlpha.indexOf(char.toLowerCase()) + this.num].toLowerCase()
      } else {
        return char
      }
    }).join('')
  }
}

// const cipher = new ShiftCipher(2);
// console.log(alphabet)
// console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
// console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'

// Feel free to reference the Unicode Table as well as the JavaScript String methods including: 
// toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()

const cip = new ShiftCipher(1)

console.log(cip.encrypt('Z'))

