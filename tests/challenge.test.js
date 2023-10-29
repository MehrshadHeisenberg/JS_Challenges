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
    ["2023-01-01", "2023-01-05"],
    ["2023-02-01", "2023-02-28"],
    ["2023-12-25", "2024-01-01"],
    ["2023-09-10", "2023-09-10"],
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
