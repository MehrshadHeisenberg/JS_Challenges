"use strict";

const converter = (txt) => {
    txt = txt.split(",")
    .map(x => `#${x.trim()}`)
    .join(" ");

    return txt;
}

module.exports = converter;
