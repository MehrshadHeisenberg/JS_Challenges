"use strict"

const customArrayDiff = (a, b) => {
    b.map((y) => {
        a = a.filter(x => x != y ? x : null);
        a.sort((w, z) => w - z);
    })

    return a;
}

module.exports = customArrayDiff
