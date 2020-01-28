// iterative solution
// const fib = number => {
//   let fib1 = 0;
//   let fib2 = 1;

//   for (let i = 0; i < number; i++) {
//     const temp = fib1;

//     fib1 = fib2;
//     fib2 = fib1 + temp;
//   }
//   return fib1;
// };

// recursive solution
// const fib = number => {
//   if (number < 2) {
//     return number;
//   }

//   return fib(number - 1) + fib(number - 2);
// };

// general memoization
// const slowFib = number => {
//   if (number < 2) {
//     return number;
//   }

//   return fib(number - 1) + fib(number - 2);
// };

// const memoize = fn => {
//   const cache = {};

//   return (...args) => {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   };
// };
// const fib = memoize(slowFib);

// specific memoization
const fib = (() => {
  const cache = {};

  function f(n) {
    let value;

    if (cache[n]) {
      value = cache[n];
    } else {
      if (n < 2) {
        value = n;
      } else {
        value = f(n - 1) + f(n - 2);
      }

      cache[n] = value;
    }
    return value;
  }

  return f;
})();

module.exports = fib;
