/* Controls and Flow
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

//infinite loop
let iio = 10;
do {
 iio = iio + 9;
 console.log(iio);
} while (iio > 10);

let n = 0;
let x2 = 0;
while (n < 3) {
  n++;
  x2 += n;
}

//Infinite loops are bad!
while (true) {
  console.log('Hello, world!');
}

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
