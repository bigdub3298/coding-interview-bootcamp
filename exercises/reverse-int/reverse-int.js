const reverseInt = number => {
  let numString = "";
  if (number < 0) {
    numString = number.toString().slice(1);

    return parseInt(
      "-" +
        numString
          .split("")
          .reverse()
          .join("")
    );
  } else {
    return parseInt(
      number
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  }
};

module.exports = reverseInt;
