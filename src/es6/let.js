function letDemo() {
  var cowSays = "woof woof!";
  if(true) {
    let cowSays = "moo";
    console.log(cowSays); //prints moo 
  };
  console.log(cowSays); // prints woof woof!
};