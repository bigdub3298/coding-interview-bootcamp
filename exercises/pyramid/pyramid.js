// soluiton 1
// const pyramid = number => {
//   let hashtags = 1,
//     spaces = number - hashtags;

//   for (let i = 0; i < number; i++) {
//     console.log(" ".repeat(spaces) + "#".repeat(hashtags) + " ".repeat(spaces));
//     spaces--;
//     hashtags += 2;
//   }
// };

// soluiton 2
// const pyramid = number => {
//   for (let j = 0; j < number; j++) {
//     let row = "";

//     for (let i = 0; i < number * 2 - 1; i++) {
//       if (i < number - j - 1 || i > number + j - 1) {
//         row += " ";
//       } else {
//         row += "#";
//       }
//     }
//     console.log(row);
//   }
// };

// solution 3
const pyramid = (number, row = 0, stair = "") => {
  if (row === number) {
    return;
  }

  if (stair.length === number * 2 - 1) {
    console.log(stair);
    return pyramid(number, row + 1);
  }

  if (stair.length < number - row - 1 || stair.length > number + row - 1) {
    stair += " ";
  } else {
    stair += "#";
  }

  return pyramid(number, row, stair);
};
module.exports = pyramid;
