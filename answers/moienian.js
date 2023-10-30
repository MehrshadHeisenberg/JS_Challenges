"use strict"

function findLuckyNumber(arr) {
  const find =  arr.find((item) => item.toString().includes('7'))
  return find || -1
}
module.exports = findLuckyNumber;
