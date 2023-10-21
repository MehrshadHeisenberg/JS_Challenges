// challenge.test.js
const fs = require("fs");
const path = require("path");
const myFunc = require("../js_challenges");

describe("Not important", () => {
  // Get the list of JavaScript files in the answers folder
  const answersFolder = path.join(__dirname, "../answers");
  const answerFiles = fs.readdirSync(answersFolder);

  // Define the test cases
  const testCases = [
    [
      [1, 2, 3, 4],
      [3, 4, 5, 6],
    ],
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9],
    ],
    [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ],
    [
      [5, 6, 7],
      [8, 9, 10],
    ],
    [
      [1, 2, 3],
      [2, 3, 4],
    ],
  ];

  // Iterate over each JavaScript file and run the tests
  answerFiles.forEach((file) => {
    const answer = require(path.join(answersFolder, file));

    testCases.forEach((input, index) => {
      test(`Test case ${index + 1} in ${file}`, () => {
        expect(answer(...input)).toEqual(myFunc(...input));
      });
    });
  });
});
