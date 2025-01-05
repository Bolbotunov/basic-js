const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  options.addition = options.hasOwnProperty('addition') ? String(options.addition) : '';

  let additionPart = '';
  if (options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additionPart += options.addition;
      if (i < options.additionRepeatTimes - 1) {
        additionPart += options.additionSeparator || '|';
      }
    }
  } else {
    additionPart = options.addition;
  }

  let result = '';
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      result += str + additionPart;
      if (i < options.repeatTimes - 1) {
        result += options.separator || '+';
      }
    }
  } else {
    result = str + additionPart;
  }

  return result;
}

module.exports = {
  repeater
};
