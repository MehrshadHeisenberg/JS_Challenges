function findLuckyNumber(numbers) {
  return arr.find((item) => item.toString().includes('7')) ? '7' : -1
}
module.exports = findLuckyNumber;
