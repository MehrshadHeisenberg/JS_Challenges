const luckyNumber = function (arr) {
  if (arr.find(el => String(el).includes(7)))
    return arr.find(el => String(el).includes(7));
  else return -1;
};
module.exports=luckyNumber
