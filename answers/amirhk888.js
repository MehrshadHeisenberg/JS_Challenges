"use strict";

const createHashtags = (txt) => {

    if(txt == "") {
        return "";
    } else {
        return txt.split(",").map(x => `#${x.trim()}`).join(" ");
    }
}

module.exports = createHashtags;