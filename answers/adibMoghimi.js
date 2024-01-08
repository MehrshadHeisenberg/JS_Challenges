"use strict";

function find7(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + "").includes("7")) return arr[i];
  }

  return -1;
}

module.exports = find7;
