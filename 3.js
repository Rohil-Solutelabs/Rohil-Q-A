 // Program to check a string with balanced brackets:-


function isBalanced(str) {
  const stack = [];
  const pairs = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in pairs) {
      stack.push(char);
    } else if (char === "}" || char === ")" || char === "]") {
      /*now (else if) checks is close bracket or not, if it is close bracket then check if the top of the stack has
     related open bracket , if its not then false otherwise true */
      const endchar = stack.pop();
      if (
        (char === "}" && endchar !== "{") ||
        (char === ")" && endchar !== "(") ||
        (char === "]" && endchar !== "[")
      ) {
        return false;
      }
    }
  }
  return true;
}

const str1 = "( {} [] ({}))";
const str2 = "}}";

console.log(isBalanced(str1));
console.log(isBalanced(str2));
