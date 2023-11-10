"use strict";

function createHashtags(input) {
  if (input === "") {
    return "";
  }

  const words = input.split(",");
  const hashtags = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].trim();
    const hashtag = "#" + word;
    hashtags.push(hashtag);
  }

  return hashtags.join(" ");
}

module.exports = createHashtags;
