"use strict";

function dateDifference(startDate, endDate) {
  const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in one day
  const start = new Date(startDate);
  const end = new Date(endDate);
  const differenceInDays = Math.round(Math.abs((end - start) / oneDay));

  return differenceInDays;
}

module.exports = dateDifference;
