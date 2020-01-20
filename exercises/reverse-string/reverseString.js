// Solution 1
const reverseString = string => {
  let reverseString = "";
  for (let i = string.length - 1; i > -1; i--) {
    reverseString += string[i];
  }
  return reverseString;
};

// Solution 2
// const reverseString = string => {
//   return string
//     .split("")
//     .reverse()
//     .join("");
// };

module.exports = reverseString;
