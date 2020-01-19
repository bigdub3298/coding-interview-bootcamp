reverseString = string => {
  let reverseString = "";
  for (let i = string.length - 1; i > -1; i--) {
    reverseString += string[i];
  }
  return reverseString;
};

module.exports = reverseString;
