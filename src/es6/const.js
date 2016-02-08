function constDemo() {
  const imImmutable = "hammertime!"; // can't touch this

  const cantTouchThis = {
    'halt' : 'hammertime' // but this i can touch
  }

  // const only makes the _binding_ immutable, not the value
  cantTouchThis.halt = 'hammerzeit';
  console.log(cantTouchThis.halt) // prints hammerzeit

  // this would fail
  // cantTouchThis = [];
};