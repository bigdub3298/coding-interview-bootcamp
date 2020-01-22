const areEqual = (obj1, obj2) => {
  const props1 = Object.keys(obj1);
  const props2 = Object.keys(obj2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (const prop of props1) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
};

const buildCharMap = str => {
  const charRegEx = /\w/;

  const charMap = {};
  for (const letter of str.toLowerCase()) {
    if (!charRegEx.test(letter)) {
      continue;
    }
    charMap[letter] = charMap[letter]++ || 1;
  }

  return charMap;
};

// const buildSortedString = str => {
//   const regEx = /\W/g;
//   return (sortedArr1 = str
//     .replace(regEx, "")
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join(""));
// };

// solution 1
const isAnagrams = (str1, str2) => {
  const charMap1 = buildCharMap(str1);
  const charMap2 = buildCharMap(str2);

  return areEqual(charMap1, charMap2);
};

// solution 2
// const isAnagrams = (str1, str2) => {
//   const sortedArr1 = buildSortedString(str1);
//   const sortedArr2 = buildSortedString(str2);

//   return sortedArr1 === sortedArr2;
// };

module.exports = isAnagrams;
