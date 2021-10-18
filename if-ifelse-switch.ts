
// The ‘if…else’ construct evaluates a condition before a block of code is executed.
var  num:number = 5
if (num > 0) { 
   console.log("number is positive") 
}



// An if can be followed by an optional else block. The else block will execute if the Boolean expression tested by the if statement evaluates to false.
var num:number = 12; 
if (num % 2==0) { 
   console.log("Even"); 
} else {
   console.log("Odd"); 
}

//The else…if ladder is useful to test multiple conditions. Its syntax is given below 
var num:number = 2 
if(num > 0) { 
   console.log(num+" is positive") 
} else if(num < 0) { 
   console.log(num+" is negative") 
} else { 
   console.log(num+" is neither positive nor negative") 
}
//The switch statement evaluates an expression, matches the expression’s value to a case clause, and executes statements associated with that case.
var grade:string = "A"; 
switch(grade) { 
   case "A": { 
      console.log("Excellent"); 
      break; 
   } 
   case "B": { 
      console.log("Good"); 
      break; 
   } 
   case "C": {
      console.log("Fair"); 
      break;    
   } 
   case "D": { 
      console.log("Poor"); 
      break; 
   }  
   default: { 
      console.log("Invalid choice"); 
      break;              
   } 
}                  
