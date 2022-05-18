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

let fish = ["Lion", , "Angel"];
console.log(fish);

/**
 * Expression and Operators in JS
 * Assignment operators
 * Comparison operators
 * Arithmetic operators
 * Bitwise operators
 * Logical operators
 * String operators
 * Conditional (ternary) operator
 * Comma operator
 * Unary operators
 * Relational operators
 *
 *
 * binary and unary operators, and one special ternary operator, the conditional operator.
 *? Binary Operator SYNTAX - operand1 operator operand2
 *? Uniary Opertor Syntax -  operator operand or  operand operator
 *
 * Name	Shorthand operator	Meaning
   Assignment	x = f()	x = f()
   Addition assignment	x += f()	x = x + f()
   Subtraction assignment	x -= f()	x = x - f()
   Multiplication assignment	x *= f()	x = x * f()
   Division assignment	x /= f()	x = x / f()
   Remainder assignment	x %= f()	x = x % f()
   Exponentiation assignment	x **= f()	x = x ** f()
   Left shift assignment	x <<= f()	x = x << f()
   Right shift assignment	x >>= f()	x = x >> f()
   Unsigned right shift assignment	x >>>= f()	x = x >>> f()
   Bitwise AND assignment	x &= f()	x = x & f()
   Bitwise XOR assignment	x ^= f()	x = x ^ f()
   Bitwise OR assignment	x |= f()	x = x | f()
   Logical AND assignment	x &&= f()	x && (x = f())
   Logical OR assignment	x ||= f()	x || (x = f())
   Logical nullish assignment	x ??= f()	x ?? (x = f())
 */
let y1 = "Hello World!";
let x1 = 34; //assignment
console.log((x1 += 30)); //Addition Assignment
console.log((y1 += "World now")); //String addition Assignment
console.log((y1 -= 30)); // Subtraction Assignment
console.log((y1 -= "World!"));//Subtraction Assignment 

