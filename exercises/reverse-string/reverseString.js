// Solution 1
const reverseString = string => {
  let reversed = "";
  for (let i = string.length - 1; i > -1; i--) {
    reversed += string[i];
  }
  return reversed;
};

// Solution 2
// const reverseString = string => {
//   return string
//     .split("")
//     .reverse()
//     .join("");
// };

// Solution 3
// const reverseString = string => {
//   let reversed = "";
//   for (const letter of string) {
//     reversed = letter + reversed;
//   }
//   return reversed;
// };

// Solution 4
// const reverseString = string => {
//   const array = string.split("");
//   return array.reduce((accum, curr) => curr + accum, "");
// };

// Solution 5
// const reverseString = string => {
//   const array = string.split("");
//   return array.reduceRight((accum, curr) => accum + curr, "");
// };

module.exports = reverseString;
