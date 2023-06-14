function greet(name){
  //your code here
  //This is how you concatenate a string and variable combo
  //let sentence = "Hello," + " " + name +" " + "how are you doing today?";
  //Make sure to use back ticks to enclose the string when using string interpolation - ${name}
  let sentence = `Hello, ${name} how are you doing today?`;
  return(sentence);
}