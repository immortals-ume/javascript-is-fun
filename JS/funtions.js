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
