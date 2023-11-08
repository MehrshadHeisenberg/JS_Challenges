const A = [1, 2, 3, 4, 5, 6, 7, 8, 3, -20, 333, 20, 15];
const B = [3, 6, 8, 15];

const customArrayDiff = (a, b) => {
    b.map((y) => {
        a = a.filter(x => x != y ? x : null);
        a.sort((w, z) => w - z);
    })

    return a;
}

console.log(customArrayDiff(A, B));
console.log(customArrayDiff([9, 8, 1, 5, -9, 50, 33], [3, 8, 5]));