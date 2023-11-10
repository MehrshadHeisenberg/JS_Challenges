"use strict";

const converter = (txt) => {
    return txt.split(",")
    .map(x => `#${x.trim()}`)
    .join(" ");
}

module.exports = converter;
