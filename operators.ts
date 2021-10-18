// Arthimatic Operators
var num1:number = 15;
var num2:number = 10;
var res:number = 0;

res = num1 + num2
console.log("Sum: "+res);

res = num1 - num2
console.log("Differnce: "+res);

res = num1 * num2
console.log("Product: "+res);

# by using arithmetic operators
# tsc operators.ts --> After compile we need to loop the javascript script by using below command
# node operators.js


// Logical Operators(AND - OR- NOT)

var avg:number = 15;
var percentage:number = 90;
console.log("Values of Average: "+avg", values of percentage: "+percentage");
var res:boolean =((avg>50)&&(percentage>80));
console.log("(avg>50)&&(percentage>80): ",res);

# tsc operators.ts --> After compile we need to loop the javascript script by using below command
# node operators.js --> o/p false

//Relational Operators(>,<,>=,<=,==,!=)
var num1:number = 15;
var num2:number = 20;

console.log("value of number1: "+num1);
console.log("value of number2: "+num2);

var res = num1>num2
console.log("Number 1 is greater than number 2: " +res)

res = num1<num2
console.log("Number 1 is less than number 2: " +res)

//BitWise Operators(and &,or |,Xor ^,Not ~,leftshit <<,rightshift >>,rightshiftwith zero>>>)
var a:number = 2; 
var b:number = 3;
var reesult;
result = (a & b);
console.log("(a & b) => ", result)
result = (a | b);
console.log("(a | b) => ", result)

//String Operators: Concatenation operator (+)

//The + operator when applied to strings appends the second string to the first. The following example helps us to understand this concept.

var msg:string = "hello"+"world" 
console.log(msg)
