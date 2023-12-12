console.log("Wel Come");
function sum(a,b)
 {
    return a+b;
 }
 function sub(a,b)
  {
    return a-b;
  }
let firstnum=prompt("Enter first number :");
let secondnum=prompt("Enter second number : ");
console.log("Sum of %d and %d:%d",firstnum,secondnum,sum(firstnum,secondnum));
console.log("Difference of %d and %d:%d",firstnum,secondnum,sub(firstnum,secondnum));
