const hashGnerator = (str) =>
  str && str
    .split(",")
    .map((w) => w.replace(" ", ""))
    .map((w) => `#${w}`)
    .join(" ");

module.exports = hashGnerator;
