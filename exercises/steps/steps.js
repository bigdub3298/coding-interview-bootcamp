// solution 1
// const steps = number => {
//   let hashtags = 1,
//     spaces = number - hashtags;

//   for (let i = 0; i < number; i++) {
//     console.log("#".repeat(hashtags++) + " ".repeat(spaces--));
//   }
// };

// solution 2
// const steps = number => {
//   for (let i = 0; i < number; i++) {
//     let step = "";

//     for (let j = 0; j < number; j++) {
//       if (j <= i) {
//         step += "#";
//       } else {
//         step += " ";
//       }
//     }
//     console.log(step);
//   }
// };

// solution 3
const steps = (number, row = 0, stair = "") => {
  if (row === number) {
    return;
  }

  if (number === stair.length) {
    console.log(stair);
    return steps(number, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  return steps(number, row, stair);
};

module.exports = steps;
