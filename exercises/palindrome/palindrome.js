// Solution 1
const isPalindrome = string => {
  if (string.length === 0) {
    return false;
  }

  const lowercaseString = string.toLowerCase();
  for (let i = 0, j = lowercaseString.length - 1; i <= j; i++, j--) {
    if (lowercaseString[i] !== lowercaseString[j]) {
      return false;
    }
  }
  return true;
};

// Solution 2
// can implement any solution from reverse string and
// compare with original string
// const isPalindrome = string => {
//   if (string.length === 0) {
//     return false;
//   }
//   let reversed = "";
//   for (const letter of string) {
//     reversed = letter + reversed;
//   }

//   return reversed.toLowerCase() === string.toLowerCase();
// };

module.exports = isPalindrome;
