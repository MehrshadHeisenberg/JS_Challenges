"use strict"
const finder = (myArray ,toRemove) => (myArray = myArray.filter((el) => !toRemove.includes(el)));
module.exports = finder;
