function findLuckyNumber(numbers) {
  numbers.map((number) => {
if number.toString().includes(number) {return number} else {return -1}
  })
}
module.exports = findLuckyNumber;
