"use strict";

function calculatePropertySum(objects, property) {
  return objects.reduce((sum, obj) => sum + (parseFloat(obj[property]) || 0), 0);
};

module.exports = calculatePropertySum;
