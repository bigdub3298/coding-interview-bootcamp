const reverseInt = number => {
  let numString = number
    .toString()
    .split("")
    .reverse()
    .join("");

  return number >= 0 ? parseInt(numString) : parseInt("-" + numString);
};

module.exports = reverseInt;
