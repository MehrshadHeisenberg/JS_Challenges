const finder = function (arr) {
  const obj = {};
  arr.forEach((el) => {
    obj[el] = (obj[el] = obj[el] || 0) + 1;
  });
  if (Object.values(obj).every(el=>Object.values(obj)[0]===el))return arr[0]
  return Object.keys(obj).find(key=>obj[key]===Object.values(obj).sort((a,b)=>a-b)[Object.keys(obj).length-1])
};

module.exports=finder
