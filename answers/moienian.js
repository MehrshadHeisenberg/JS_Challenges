function findLuckyNumber(numbers) {
  numbers.map((number) => {
return number.toString().includes('7') ? number : -1
  })
}
module.exports = findLuckyNumber;
