//?variables
var str = ""; //Declares a variable, optionally initializing it to a value.

let _std = "shut the downing "; //Declares a block-scoped, local variable, optionally initializing it to a value.

const _stf = "shut the fuck up"; //Declares a block-scoped, constant  value.

console.log(str);
console.log(_std);
console.log(_stf);

//Undeclared global variable
//It also generates a strict JavaScript warning. Undeclared global variables can often lead to unexpected behavior. Thus, it is discouraged to use undeclared global variables.
x = 42;
console.log(x);

//?Evaluating Variables
var a;
console.log("the values of a is " + a); //undefined

var b;
console.log("the value of b is " + b); //undefined

console.log("the value of y is " + c); //reference error
/**
 * Uncaught ReferenceError ReferenceError: c is not defined
    at <anonymous> (/home/itachi-uchiha/javascript-is-fun/Basic.js:24:36)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Module._load (internal/modules/cjs/loader.js:790:12)
    at executeUserEntryPoint (internal/modules/run_main.js:75:12)
    at <anonymous> (internal/main/run_main_module.js:17:47)
 */
console.log("the value of y is " + y); //refrence error
let y;
/**
 * Uncaught ReferenceError ReferenceError: Cannot access 'y' before initialization
    at <anonymous> (/home/itachi-uchiha/javascript-is-fun/Basic.js:36:36)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Module._load (internal/modules/cjs/loader.js:790:12)
    at executeUserEntryPoint (internal/modules/run_main.js:75:12)
    at <anonymous> (internal/main/run_main_module.js:17:47)

 */

console.log("The value of b is " + b); // The value of b is undefined ? block scope is not defined by the type var
var b;

//to identify the values is undefined or not,The undefined value behaves as false when used in a boolean context.
var input;
if (input === undefined) {
  console.log("YES");
} else {
  console.log("NO");
}

var myArray = [];
if (!myArray[0]) myFunction();
/**
 * Exception has occurred: ReferenceError: myFunction is not defined
  at Object.<anonymous> (/home/itachi-uchiha/javascript-is-fun/Basic.js:61:18)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:75:12)
    at internal/main/run_main_module.js:17:47
 */

//The undefined value converts to NaN when used in numeric context.
var a;
a + 2; // Evaluates to NaN
console.log(a + 2);

//When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts. For example:
var n = null;
console.log(n * 32); // Will log 0 to the console

//?
/* *Variable scope Theory
 * When you declare a variable outside of any function, it is called a global variable,
 * because it is available to any other code in the current document. When you declare a variable within
 * a function, it is called a local variable, because it is available only within that function.
 * JavaScript before ECMAScript 2015 does not have block statement scope. Rather,
 * a variable declared within a block is local to the function (or global scope) that the block resides within.
 */

if (true) {
  var x = 5;
}
console.log(x); // x is 5

if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y is not defined(undefined)

/* *Variable Hoisting
 * Another unusual thing about variables in JavaScript
 * is that you can refer to a variable declared later, without getting an exception.
 * This concept is known as hoisting. Variables in JavaScript are, in a sense, "hoisted" (or "lifted") to the top of the
 * function or statement.
 * variables that are hoisted return a value of undefined.
 * So even if you declare and initialize after you use or refer to this variable, it still returns undefined
 */
/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = "my value";

(function () {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

/* @line 60
 * * Case For Let and Const
 * Referencing the variable in the block before the variable declaration results in a ReferenceError, because the variable
 * is in a "temporal dead zone" from the start of the block until the declaration is processed.
 *
 * above example are provided already
 *
 */
console.log(x); // ReferenceError
let x = 3;

/* *Function Hoisting
 *  function hoisting only applicable function calling not the function expression
 */
/* Function declaration */

foo(); // "bar"

function foo() {
  console.log("bar");
}

/* Function expression */

baz(); // TypeError: baz is not a function
/**
 * Exception has occurred: TypeError: baz is not a function
  at Object.<anonymous> (/home/itachi-uchiha/javascript-is-fun/Basic.js:147:1)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:75:12)
    at internal/main/run_main_module.js:17:47
 */

var baz = function () {
  console.log("bar2");
};

/* *Constants
 * You can create a read-only, named constant with the const keyword.The syntax of a constant identifier is the same as
 *  any variable identifier: it must start with a letter,
 * underscore, or dollar sign ($), and can contain alphabetic, numeric, or underscore characters.
 * A constant cannot change value through assignment or be re-declared while the script is running.
 * It must be initialized to a value.
 * The scope rules for constants are the same as those for let block-scope variables.
 * If the const keyword is omitted, the identifier is assumed to represent a variable
 */

const PI = 3.14;

//You cannot declare a constant with the same name as a function or variable in the same scope. For example:
const PI = 3.14;

//THIS WILL CAUSE AN ERROR
function f() {}
const f = 5;

//THIS WILL CAUSE AN ERROR TOO
function f() {
  const g = 5;
  var g;

  //   //statements
}

//However, the properties of objects assigned to constants are not protected, so the following statement is executed without problems.

const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";

//Also, the contents of an array are not protected, so the following statement is executed without problems.

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];

/* *The latest ECMAScript standard defines eight data types:

 * Seven data types that are primitives:
 * Boolean. true and false.
 * null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
 * undefined. A top-level property whose value is not defined.
 * Number. An integer or floating point number. For example: 42 or 3.14159.
 * BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
 * String. A sequence of characters that represent a text value. For example: "Howdy"
 * Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.
 * and Object
 * For Examples:   
*/

let x = true;
let y3 = false;

x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"

"37" - 7; // 30
"37" + 7; // "377

// *literals - Array literals
let coffees = ["French Roast", "Colombian", "Kona"];
console.log(coffees);

let fish = ['Lion', , 'Angel'];
console.log(fish)