"use strict";

function findArrayIntersection(arr1, arr2) {
  const intersection = [];

  for (const num of arr1) {
    if (arr2.includes(num)) {
      intersection.push(num);
    }
  }

  return intersection;
}

module.exports = findArrayIntersection;
