// solution 1
const capitalize = str => {
  const wordArr = str.split(" ");

  const capsWordArr = wordArr.map(
    word => word.slice(0, 1).toUpperCase() + word.slice(1)
  );

  return capsWordArr.join(" ");
};

// solution 2
// const capitalize = str => {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// };

module.exports = capitalize;
