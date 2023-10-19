"use strict"
const find7 = numbers => numbers.find(n => /7/.test(n)) || -1;

module.exports = find7;
