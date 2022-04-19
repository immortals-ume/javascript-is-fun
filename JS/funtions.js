/* * Functions iN JS
 * A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function,
 * it should take some input and return an output where there is some obvious relationship between the input and the output
 *
 * Funtion Declaration :
 * function definition (also called a function declaration, or function statement) consists of the function keyword, followed by: The name of the function. , A list of parameters to the function, enclosed in parentheses and separated by commas. , The JavaScript statements that define the function, enclosed in curly brackets, {...}.
 *
 *
 * Parameters are essentially passed to functions by value — so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, the change is not reflected globally or in the code which called that function.
 *
 * While the function declaration above is syntactically a statement, functions can also be created by a function expression. Such a function can be anonymous; it does not have to have a name.
 *
 *
 * Function Scope
 *
 *  a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.
 *
 */

function getIds(id) {
  return id * id;
}

console.log(getIds(Math.random()));

function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = { make: "Honda", model: "Accord", year: 1998 };
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota" , (the make property was changed by the function)
console.log(x + " changed to " + y);

map = (f, a) => {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
};
const f = (x) => {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);

// The following variables are defined in the global scope
var num1 = 20,
  num2 = 3,
  name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Chamakh scored 5"

/**
 * Recursion
    A function can refer to and call itself. There are three ways for a function to refer to itself:

    The function's name
    arguments.callee
    An in-scope variable that refers to the function 
 * 
 */
function foo(i) {
  if (i < 0) return;
  console.log("begin: " + i);
  foo(i - 1);
  console.log("end: " + i);
}
foo(3);
