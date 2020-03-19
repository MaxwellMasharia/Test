let i = 10;
let j = 20;

// using the function to swap
swap(i,j);

console.log("i = "+i);
console.log("j = "+j);

// create a function for swapping

function swap(numberOne,numberTwo){
  let temp = numberOne;
  numberOne = numberTwo;
  numberTwo = temp;
}
