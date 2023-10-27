const findMostFrequentElement = arr => arr.reduce((a, c, i, t) => (t.filter(e => e === c).length > t.filter(e => e === a.element).length ? { element: c } : a), { element: null }).element;
module.exports = findMostFrequentElement;
