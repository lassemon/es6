function arrowFunctionDemo() {
  "use strict";

  // parameter definition with assignment
  let identity = x => x;

  // function body after arrow
  let plus = x => x + x;
  console.log(plus(2)); // 4

  // function body in parenthesis allows for object literal
  let key_master = val => ({key: val});
  console.log(key_master('gatekeeper')) // {key:'gatekeeper'}
};

module.exports = arrowFunctionDemo;