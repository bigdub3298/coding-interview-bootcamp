const reverseInt = number => {
  let numString = number
    .toString()
    .split("")
    .reverse()
    .join("");

  // can use math.sign(number) to handle the sign
  return number >= 0 ? parseInt(numString) : parseInt("-" + numString);
};

module.exports = reverseInt;
