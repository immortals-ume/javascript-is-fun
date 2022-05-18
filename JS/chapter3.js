/* *
 * Chapter 3 : Functions in Java Script /ECMASCRIPT 
 */


/** Functions iN JS
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

/* * Recursion
 * A function can refer to and call itself. There are three ways for a function to refer to itself:
 *  The function's name
 *  arguments.callee
 *  An in-scope variable that refers to the function
 */

const foo = (i) => {
  if (i < 0) return;
  console.log("begin: " + i);
  foo(i - 1);
  console.log("end: " + i);
};
foo(3);

/* *
 * Closure - Nested Functions Create Closure
 * The inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.: the inner function can use the arguments and variables of the outer function,
 * while the outer function cannot use the arguments and variables of the inner function.
 */

const pet1 = (name) => {
  // The outer function defines a variable called "name"
  const getName = () => {
    return name; // The inner function has access to the "name" variable of the outer
    //function
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
myPet = pet1("Vivie");
console.log(myPet()); // Returns "Vivie"

var createPet = function (name) {
  var gender;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getGender: function () {
      return gender;
    },

    setGender: function (newGender) {
      if (
        typeof newGender === "string" &&
        (newGender.toLowerCase() === "male" ||
          newGender.toLowerCase() === "female")
      ) {
        gender = newGender;
      }
    },
  };
};

var pet = createPet("Vivie");
console.log(pet.getName());
console.log(pet.getGender());
console.log(pet.setName("Oliver"));
console.log(pet.setGender("male"));
console.log(pet.getGender());
console.log(pet.getName());

var getCode = (function () {
  var apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify...

  return function () {
    return apiCode;
  };
})();

console.log(getCode());

/* *
 * Function Arguments
 * The arguments variable is "array-like", but not an array. It is array-like in that it has a numbered index and a length property. However, it does not possess all of the array-manipulation methods.
 * TODO: CHECK THE CODE BELOW
 *  DEFAULT PARAMS - parameters of functions default to undefined
 * REST PARAMS - allows us to represent an indefinite number of arguments as an array.
 */

const concat = (separator) => {
  var result = ""; // initialize list
  var i;
  // iterate through arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  console.log(result);
  return result;
};

concat(",", "red", "purple", "blue");

function multiply(a, b) {
  //before the ECMASCRIPT-2015 we need to define the checks
  b = typeof b !== "undefined" ? b : 1;

  return a * b;
}

multiply(5); // 5

//With default parameters, a manual check in the function body is no longer necessary.
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5

function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

/* *
 * Arrow Functions -
 * An arrow function expression has a shorter syntax compared to function expressions and
 * does not have its own this, arguments, super, or new.target
 * always anonymous
 * Reasons of Introduction Of Arrow Functions :
 * 1. shorter Functions
 * 2. non-binding this
 *
 *
 * every new function defined its own this value (a new object in the case of a constructor, undefined in
 * strict mode function calls, the base object if the function is called as an "object method", etc.).
 * This proved to be less than ideal with an object-oriented style of programming.
 *
 * a bound function could be created so that the proper this value would be passed to the growUp() function.
 * An arrow function does not have its own this; the this value of the enclosing execution context is used.
 */
var a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

var a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map((s) => s.length);

console.log(a3); // logs [8, 6, 7, 9]

function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
