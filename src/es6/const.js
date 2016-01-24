function constDemo() {
  "use strict";
  
  const imImmutable = "barf barf!"; // can't touch this
  console.log(imImmutable); 
};

module.exports = constDemo;