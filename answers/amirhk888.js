"use strict";

const convertText = (txt) => {
    return txt.split(",")
    .map(x => `#${x.trim()}`)
    .join(" ");
}

module.exports = convertText;
