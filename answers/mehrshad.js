"use strict";

function calculatePropertySum(objects, property) {
  let sum = 0;
  for (let obj of objects) {
    if (obj.hasOwnProperty(property)) {
      sum += Number(obj[property]);
    }
  }
  return sum;
}

module.exports = calculatePropertySum;
