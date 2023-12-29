'use strict'
const remover = (main, shifter) => main.filter((el) => !shifter.includes(el));
module.exports=remover
