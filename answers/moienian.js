function withHashtag(input) {
  if (input.length === 0) return '';
  return input
    .split(',')
    .map((word) => `#${word.trim()}`)
    .join(' ');
}

module.exports = withHashtag;
