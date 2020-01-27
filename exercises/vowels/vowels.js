// solution 1
// const vowels = string => {
//   const vowels = new Set(["a", "e", "i", "o", "u"]);

//   let count = 0;
//   for (const letter of string) {
//     if (vowels.has(letter.toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// };

// solution 2
const vowels = string => {
  const vowels = /[aeiou]/gi;

  const matches = string.match(vowels);

  return matches ? matches.length : 0;
};

module.exports = vowels;
