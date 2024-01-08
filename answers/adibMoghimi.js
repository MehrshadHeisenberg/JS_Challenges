"use strict";

const find7 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).includes("7")) return arr[i];
  }
  return -1;
};

module.exports = find7;
