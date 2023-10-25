const summer = (arr, prop) =>
  arr.map(el => +el[prop]).reduce((acc, el) => acc + el);
module.exports=summer
