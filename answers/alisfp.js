'use strict'
const checker = (str) =>str.trim().split(",").map((word) => "#" + word);
module.exports=checker
