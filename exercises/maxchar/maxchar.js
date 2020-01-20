// solution 1
const maxChar = string => {
  if (string.length === 0) {
    return null;
  }

  let characterCounts = {};
  for (const letter of string.toLowerCase()) {
    if (!characterCounts[letter]) {
      characterCounts[letter] = 1;
    } else {
      characterCounts[letter] += 1;
    }
  }

  const maxChar = Object.entries(characterCounts).reduce(
    (accum, [char, count]) => {
      if (accum[1] < count) {
        return [char, count];
      } else {
        return accum;
      }
    },
    ["", 0]
  );

  return maxChar[0];
};

// solution 2
// const maxChar = string => {
//   if (string.length === 0) {
//     return null;
//   }

//   let characterCounts = {};
//   for (const letter of string.toLowerCase()) {
//     if (!characterCounts[letter]) {
//       characterCounts[letter] = 1;
//     } else {
//       characterCounts[letter] += 1;
//     }
//   }

//   let maxChar = "";
//   let maxCount = 0;
//   for (const char in characterCounts) {
//     if (maxCount < characterCounts[char]) {
//       maxChar = char;
//       maxCount = characterCounts[char];
//     }
//   }
//   return maxChar;
// };

module.exports = maxChar;
