'use strict'
const checker = (str) =>
  str.length > 1
    ? str
        .trim()
        .split(",")
        .map((word) => "#" + word.trim())
        .join(" ")
    : "";
module.exports=checker
