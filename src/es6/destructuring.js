// destructure arrays
const [a, b] = [1,2];

// destructure object keys
const { x } = { x: 3 };

// destructure function parameters
function foo({ a }) {
  console.log(a);
}
foo({ a: 4 }); // prints 4

// destructure function parameters with default values
function bar({ a = 1, b = 2 } = {}) {
  console.log('a', a);
  console.log('b', b);
}
bar({});
// a 1
// b 2

bar({a:3});
// a 3
// b 2
