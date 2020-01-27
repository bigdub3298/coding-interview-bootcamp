// soluiton 1
const pyramid = number => {
  let hashtags = 1,
    spaces = number - hashtags;

  for (let i = 0; i < number; i++) {
    console.log(" ".repeat(spaces) + "#".repeat(hashtags) + " ".repeat(spaces));
    spaces--;
    hashtags += 2;
  }
};

module.exports = pyramid;
