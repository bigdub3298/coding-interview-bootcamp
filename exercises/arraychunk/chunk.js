// Solution 1
const chunk = (arr, size) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

// Solution 2
// const chunk = (arr, size) => {
//   const chunkedArr = [];

//   let chunk = [];
//   for (const item of arr) {
//     chunk.push(item);
//     if (chunk.length % size === 0) {
//       chunkedArr.push(chunk);
//       chunk = [];
//     }
//   }

//   if (arr.length % size !== 0) {
//     chunkedArr.push(chunk);
//   }

//   return chunkedArr;
// };

// Solution 3
// const chunk = (arr, size) => {
//   const chunkedArr = arr.reduce((accum, curr, index) => {
//     const chunkIndex = index % size;
//     if (chunkIndex == 0) {
//       accum.push([curr]);
//     } else {
//       accum[accum.length - 1].push(curr);
//     }
//     return accum;
//   }, []);

//   return chunkedArr;
// };

// Solution 4
// const chunk = (arr, size) => {
//   const chunkedArr = [];

//   for (let item of arr) {
//     const last = chunkedArr[chunkedArr.length - 1];
//     if (!last || last.length === size) {
//       chunkedArr.push([item]);
//     } else {
//       last.push(item);
//     }
//   }
//   return chunkedArr;
// };

module.exports = chunk;
