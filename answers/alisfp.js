const finder = (arr) => {
  const obj = {};
  arr.forEach((el) => (obj[el] = (obj[el] || 0) + 1));
  if (Object.values(obj).every((el) => Object.keys(obj)[0] === el))
    return arr[0];
  return arr[
    Object.keys(obj).indexOf(
      Object.keys(obj).find(
        (el) =>
          obj[el] ===
          Object.values(obj).sort((a, b) => a - b)[
            Object.values(obj).length - 1
          ]
      )
    )
  ];
};
module.exports=finder
