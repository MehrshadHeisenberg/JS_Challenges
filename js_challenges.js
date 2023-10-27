"use strict";

function findMostFrequentElement(arr) {
  let frequencyMap = new Map();
  let maxFrequency = 0;
  let mostFrequentElement;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let frequency = frequencyMap.get(element) || 0;
    frequency++;
    frequencyMap.set(element, frequency);

    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

module.exports = findMostFrequentElement;
