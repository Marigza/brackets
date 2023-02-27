module.exports = function check(str, bracketsConfig) {

  const bracketOpen = bracketsConfig.map(item => item[0]);

  if (bracketOpen.includes('|')) {
    bracketOpen.splice(bracketOpen.indexOf('|'), 1);
  } else if (bracketOpen.includes('8') || bracketOpen.includes('7')) {
    bracketOpen.splice(bracketOpen.indexOf('7'), 2);
  } 

  const bracketObj = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5'
  };

  let result = [];

  for (let i = 0; i < str.length; i++) {
    
    let top = result[result.length - 1];

    if (bracketOpen.includes(str[i])) {
      result.push(str[i]);
    } else if (str[i] === '|') {
      if (top === '|') {
        result.pop();
      } else {
        result.push(str[i]);
      }
    } else if (str[i] === '7') {
      if (top === '7') {
        result.pop();
      } else {
        result.push(str[i]);
      }
    } else if (str[i] === '8') {
      if (top === '8') {
        result.pop();
      } else {
        result.push(str[i]);
      }
    } else {
      if (result.length === 0) return false;
      if (bracketObj[str[i]] === top) {
        result.pop();
      } else {
      return false
    }
  }
  }
  return (result.length === 0) ? true : false;
}


