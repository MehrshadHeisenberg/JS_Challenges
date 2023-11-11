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
      [
        { name: "Item 1", price: 10, quantity: 2 },
        { name: "Item 2", price: 5, quantity: 3 },
        { name: "Item 3", price: 8, quantity: 1 },
      ],
      0.1,
      0.2,
    ],
    [
      [
        { name: "Item 1", price: 2.5, quantity: 4 },
        { name: "Item 2", price: 7, quantity: 1 },
      ],
      0.15,
      0.1,
    ],
    [[{ name: "Item 1", price: 20, quantity: 3 }], 0.08, 0.05],
    [[], 0.1, 0.2],
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
