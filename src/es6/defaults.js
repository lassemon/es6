function defaults({ a, b } = { a: 1, b: 2 }) {
  console.log('a', a);
  console.log('b', b);
}

defaults();
// a 1
// b 2

defaults({ a: 42, b: 32 });
// a 42
// b 32

// be careful with multiple params! The whole right-hand side
// is replaced with your argument!
defaults({ a: 87 });
// a 87
// b undefined


// protect against right-hand side
// with destructuring defaults
function defaults({ a = 1, b = 2 } = {}) {
  console.log('a', a);
  console.log('b', b);
}
// a 87
// b 2
