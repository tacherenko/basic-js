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
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  processMessage(message, key, isEncrypt) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const extendedKey = key.toUpperCase().repeat(Math.ceil(message.length / key.length));
    let processedMessage = '';
    let keyIndex = 0;

    for (let char of message.toUpperCase()) {
      const charIndex = this.alphabet.indexOf(char);

      if (charIndex !== -1) {
        const shift = isEncrypt ? 1 : -1;
        const processedCharIndex = (charIndex + shift * this.alphabet.indexOf(extendedKey[keyIndex++])) % this.alphabet.length;
        const processedChar = this.alphabet[(processedCharIndex + this.alphabet.length) % this.alphabet.length];
        processedMessage += processedChar;
      } else {
        processedMessage += char;
      }
    }

    return processedMessage;
  }

  encrypt(message, key) {
    return this.direct ? this.processMessage(message, key, true) : this.processMessage(message, key, true).split('').reverse().join('');
  }
  
  decrypt(encryptedMessage, key) {
    return this.direct ? this.processMessage(encryptedMessage, key, false) : this.processMessage(encryptedMessage, key, false).split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
