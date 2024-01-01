const luckyNumber = (numbers) => {
  const luckyNum = numbers.find((number) => String(number).includes("7"));
  return luckyNum ? luckyNum : -1;
};
module.exports=lukcyNumber
