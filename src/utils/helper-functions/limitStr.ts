export const limitStr = (str: string, limit: number) => {

    if (typeof str !== "string") {
      return "";
    }
  
      let chars;
      let limitedCharArr: string[] = [];
      chars = str.split('');
      let charsLength = chars.length;
  
      for (let i = 0; i < charsLength - 1; i++) {
        limitedCharArr.push(chars[i]);
  
        if (charsLength <= limit) {
          charsLength = limit;
          return chars.join('');
        }
  
        if (limit <= i) {
  
          if (chars[i-1] === "," || chars[i-1] === ".") {
            limitedCharArr.length = limitedCharArr.length - 2;
            limitedCharArr.push(" ")
          }
          break;
        }
      }
  
      const limitedString = `${limitedCharArr.join('')}(...)`;
      return limitedString;
  }