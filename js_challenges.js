"use strict";

function customArrayDiff(a, b) {
  return a.filter((value) => !b.includes(value));
}

module.exports = customArrayDiff;
