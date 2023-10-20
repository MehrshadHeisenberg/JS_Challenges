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
        { name: "John", age: 25, salary: 2500 },
        { name: "Alice", age: 30, salary: 3500 },
        { name: "Bob", age: 35, salary: 4500 },
      ],
      "salary",
    ],
    [
      [
        { product: "Apple", price: "2" },
        { product: "Banana", price: "1.5" },
        { product: "Orange", price: "3" },
      ],
      "price",
    ],
    [
      [
        { name: "John", score: "75" },
        { name: "Alice", score: "80" },
        { name: "Bob", score: "90" },
      ],
      "score",
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
