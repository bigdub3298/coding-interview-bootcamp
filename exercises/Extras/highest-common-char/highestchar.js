const highestChar = (str1, str2) => {
  const wordObj1 = letterCount(str1);
  const wordObj2 = letterCount(str2);

  let highestChar = "";
  let highestCount = 0;

  for (const char in wordObj1) {
    if (wordObj1[char] && wordObj2[char]) {
      highestChar = wordObj1[char] > highestCount ? char : highestChar;
      highestCount = wordObj1[highestChar] || 0;
    }
  }
  return highestChar;
};

const letterCount = str => {
  const result = {};

  for (const letter of str.toLowerCase()) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

module.exports = highestChar;
