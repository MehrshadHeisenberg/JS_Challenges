const hashGnerator = (str) =>
  str
    .split(",")
    .map((w) => w.replace(" ", ""))
    .map((w) => `#${w}`)
    .join(" ");

module.exports = hashGnerator;
