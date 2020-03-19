let i = 10;
let j = 20;

// using the function to swap
swap();

console.log("i = "+i);
console.log("j = "+j);

// create a function for swapping

function swap(){
  let temp = i;
  i = j;
  j = temp;
}
