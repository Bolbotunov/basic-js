const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this._process(message, key, true);
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    return this._process(encryptedMessage, key, false);
  }
  _process(text, key, isEncrypt) {
    const A = 65;
    const alphabetLength = 26;

    text = text.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;
    let result = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char >= 'A' && char <= 'Z') {
        const textCharCode = text.charCodeAt(i);
        const keyCharCode = key.charCodeAt(keyIndex % key.length);
        const shift = keyCharCode - A;

        if (isEncrypt) {
          const encryptedCharCode = (textCharCode - A + shift) % alphabetLength + A;
          result += String.fromCharCode(encryptedCharCode);
        } else {
          const decryptedCharCode = (textCharCode - A - shift + alphabetLength) % alphabetLength + A;
          result += String.fromCharCode(decryptedCharCode);
        }

        keyIndex++;
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}



module.exports = {
  VigenereCipheringMachine
};
