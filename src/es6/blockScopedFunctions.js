// wrapping your function in a scope
// ensures no namespacing conflicts
function foo(){
  return 1;
};

{
  function foo(){
    return 2;
  };
}

foo(); // returns 1;
