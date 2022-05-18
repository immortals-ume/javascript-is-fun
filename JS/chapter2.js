/* *
 * Chapter 2 : Controls and Flow , Loops For , while ,do While , for in ,for of, label and continue in ECMAScript(ES)
 */

let x = 3;

if (x == 2) {
  console.log("Everything is fine");
} else {
  console.log("Something is wrong");
}

/**
 * In general it's good practice to not have an if...else with an assignment like "x = y" as a condition:
if (x = y) {console.log("jri")}
 */
if ((x = 2)) {
  console.log("gj");
} else if ((x = 3)) {
  console.log("483");
} else if ((x = 3)) {
  console.log("ieo");
} else {
  console.log("9iomwo4");
}
/**
 * Falsy values :false,undefined,null,0,NaN,the empty string ("")
 */
switch (x) {
  case 1:
    console.log("39");
    break;
  case 2:
    console.log("495");
    break;
  default:
    console.log("iotn");
    break;
}

const b = new Boolean(false);
if (b)
  if (b == true) {
    // this condition evaluates to true
    console.log("trues");
  } // this condition evaluates to false

/**
 * Error handling
 */

let a = 0;
try {
  if (a == 323) {
    console.log(a);
  } else {
    console.log(b);
  }
} catch (e) {
  console.log(e);
} finally {
  console.log("Completed TRY CATCH BLOCK  ");
}

/**
 * Loops  : For , while ,do While , for in ,for of
 */

for (let i = 0; i < 10; i++) {
  console.log("for loop " + i);
}

//infinite loop are bad!
// let iio = 10;
// do {
//   iio = iio + 9;
//   console.log(iio);
// } while (iio > 10);

//DO While Loop
let i1 = 0;
do {
  i1 += 1;
  console.log(i1);
} while (i1 < 5);

//While Loop
let n = 0;
let x2 = 0;
while (n < 3) {
  n++;
  x2 += n;
}

//Infinite loops are bad!
// while (true) {
//   console.log("Hello, world!");
// }

//labeled stmt's

let theMark = false;
markLoop: while (theMark === true) {
  console.log(":");
}

/* * Break stmt
 *  When you use break without a label, it terminates the innermost enclosing while, do-while, for,
 *  or switch immediately and transfers control to the following statement.
 *  When you use break with a label, it terminates the specified labeled statement.
 * Syntax :
 *  break;
 *  break [label];
 */

for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}

let x1 = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops: " + x1);
  x1 += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: " + z);
    z += 1;
    if (z === 10 && x1 === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

/* * Continue stmt
 *  When you use continue without a label, it terminates the current iteration of the innermost enclosing while,
 *  do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
 *  When you use continue with a label, it applies to the looping statement identified with that label.
 * Syntax :
 *  continue;
 *  continue [label];
 */

let i3 = 0;
let n3 = 0;
while (i3 < 5) {
  i3++;
  if (i3 === 3) {
    continue;
  }
  n3 += i3;
  console.log(n3);
}
//1,3,7,12

let i2 = 0;
let n2 = 0;
while (i2 < 5) {
  i2++;
  if (i2 === 3) {
    continue;
  }
  n2 += i2;
  console.log(n2);
}
// 1,3,6,10,15

let i = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}

/* * For-in loop
 * statement iterates a specified variable over all the enumerable properties of an object
 */

let car = {
  name: "Mercedes",
  type: "super car",
};
function dump_props(obj, obj_name) {
  let result = "";
  for (let i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}

console.log(dump_props(car, car.name));

/* *For-of loop
 *  creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration
 *  hook with statements to be executed for the value of each distinct property.
 */
const arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); 
}

for (let i of arr) {
  console.log(i);
}
